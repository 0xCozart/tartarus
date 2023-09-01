"use client";

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
import { DIDSession } from "did-session";
import { ethers } from "ethers";
import { env } from "~/env.mjs";
import { definition } from "./runtime";

//this is so sick xd
export type EthProvider = Awaited<ReturnType<typeof getEthWindowProvider>>;

// need to update to ether v6
export const getEthWindowProvider = () => {
  let provider = undefined;
  let signer = undefined;
  try {
    if (typeof window.ethereum !== undefined) {
      provider = new ethers.providers.Web3Provider(window.ethereum);
      // provider = new Web3(window.ethereum);
      signer = provider.getSigner();
      // } else {
      //   provider = new ethers.BrowserProvider(window.ethereum);
      //   console.log({ provider, signer });
      //   if (!provider) throw new Error("something went wrong");
    }
    return { provider, signer };
  } catch (error) {
    console.error(error);
    return { provider, signer };
  }
};

// provider and signer will be passed up to the apollo client (need to work out how tho)
const ComposeApolloClient = async ({
  provider,
  signer,
}: Awaited<EthProvider>) => {
  try {
    if (!signer || !provider) throw new Error("user did not authenticate");
    // Prompt injected provider (metamask or another client wallet with injected provider) for connection to Nabu
    const address = await signer.getAddress();
    if (!address) throw new Error("no signer address found");
    console.log({ provider, signer });

    // Ceramic authentation pipeline
    const accountId = await getAccountId(window.ethereum, address);
    console.log({ accountId });
    const authMethod = await EthereumWebAuth.getAuthMethod(provider, accountId);

    // composedb client with runtime defenitions
    const compose = new ComposeClient({
      ceramic: env.NEXT_PUBLIC_CERAMIC_URL || "http://localhost:7007",
      definition,
    });

    const session = await DIDSession.authorize(authMethod, {
      resources: compose.resources,
    });
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
