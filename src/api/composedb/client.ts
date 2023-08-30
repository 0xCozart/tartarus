// import pkg from "@apollo/client";
// const { gql } = pkg;
import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  Observable,
} from "@apollo/client";
import { EthereumWebAuth, getAccountId } from "@didtools/pkh-ethereum";

import { ComposeClient } from "@composedb/client";
import { type AuthMethod } from "@didtools/cacao";
import { DIDSession } from "did-session";
import { ethers } from "ethers";
import { definition } from "~/api/composedb/runtime";
import { env } from "~/env.mjs";

//this is so sick xd
export type EthProvider = Awaited<ReturnType<typeof getEthWindowProvider>>;

// need to update to ether v6
export const getEthWindowProvider = async () => {
  try {
    let provider;
    let signer;
    if (window.ethereum) {
      provider = new ethers.providers.Web3Provider(window.ethereum);
      // console.log({ provider, signer });
      await provider.send("eth_requestAccounts", []);

      signer = provider.getSigner();
      // } else {
      //   provider = new ethers.BrowserProvider(window.ethereum);
      //   signer = await provider.getSigner();
      //   console.log({ provider, signer });
      //   if (!provider) throw new Error("something went wrong");
    }
    return { provider, signer };
  } catch (error) {
    console.error(error);
    return { provider: null, signer: null };
  }
};

// returns a new session or a non-expired local session
const sessionCheck = async (authMethod: AuthMethod, compose: ComposeClient) => {
  // Check if user session already in storage
  const sessionStr = localStorage.getItem("didsession");

  // If session string available, create a new did-session object
  let session;
  if (sessionStr) {
    session = await DIDSession.fromSession(sessionStr);
  }
  // If no session available, create a new user session and store in local storage
  if (!session || (session.hasSession && session.isExpired)) {
    const newSession = await DIDSession.authorize(authMethod, {
      resources: compose.resources,
    });
    localStorage.setItem("didsession", newSession.serialize());
    session = newSession;
  }

  return session;
};

// provider and signer will be passed up to the apollo client (need to work out how tho)
const ComposeApolloClient = async ({
  provider,
  signer,
}: Awaited<EthProvider>) => {
  try {
    if (!signer) throw Error("user did not authenticate");
    // Prompt injected provider (metamask or another client wallet with injected provider) for connection to Nabu
    const [address] = await signer.getAddress();
    if (!address) throw Error("no signer address found");

    // Ceramic authentation pipeline
    const accountId = await getAccountId(provider, address);
    const authMethod = await EthereumWebAuth.getAuthMethod(provider, accountId);

    // composedb client with runtime defenitions
    const compose = new ComposeClient({
      ceramic: env.NEXT_PUBLIC_CERAMIC_URL || "http://localhost:7007",
      definition,
    });

    const session = await sessionCheck(authMethod, compose);
    compose.setDID(session.did);

    // Create custom ApolloLink using ComposeClient instance to execute operations
    const link = new ApolloLink((operation) => {
      return new Observable((observer) => {
        compose.execute(operation.query, operation.variables).then(
          (result) => {
            observer.next(result);
            observer.complete();
          },
          (error) => {
            observer.error(error);
          }
        );
      });
    });

    return new ApolloClient({
      cache: new InMemoryCache(),
      link,
      connectToDevTools: true,
    });
  } catch (error) {
    console.error("compose/apollo auth error: ", error);
  }
};

export default ComposeApolloClient;
