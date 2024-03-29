"use client";

import {
  ApolloProvider,
  type ApolloClient,
  type NormalizedCacheObject,
} from "@apollo/client";
import { loadErrorMessages } from "@apollo/client/dev";
import { type ILitNodeClient } from "@lit-protocol/types";
import { DIDSession } from "did-session";
import { type AppType } from "next/dist/shared/lib/utils";
import Head from "next/head";
import { useEffect, useState } from "react";
import secureLocalStorage from "react-secure-storage";
import ComposeApolloClient, {
  getEthWindowProvider,
  type EthProvider,
} from "~/api/apollo/client";
import Login from "~/pages/login";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  const [client, setClient] = useState<ApolloClient<NormalizedCacheObject>>();
  // const router = useRouter();
  const [ethProvider, setEthProvider] = useState<Awaited<EthProvider>>({
    provider: undefined,
    signer: undefined,
  });
  const sessionDid = secureLocalStorage.getItem("sessionDid") as string;
  console.log({ sessionDid });

  // Adds messages only in a dev environment
  loadErrorMessages();

  const startLitClient = (window: Window): ILitNodeClient => {
    // connect to lit
    console.log("Starting Lit Client...");
    const client = new LitJsSdk.LitNodeClient({
      url: window.location.origin,
    });
    client.connect();
    return client as ILitNodeClient;
  };

  useEffect(() => {
    if (sessionDid && ethProvider && !client) {
      DIDSession.fromSession(sessionDid)
        .then((res) => {
          console.log("has session: ", { res });
          if (!res.isExpired) {
            const ethProvider = getEthWindowProvider();
            ComposeApolloClient(ethProvider, sessionDid)
              .then((res) => {
                console.log({ res });
                if (res?.sessionString) {
                  setClient(res.client);
                }
              })
              .catch(console.error);
          }
        })
        .catch((err) => console.error(err));
    } else if (!sessionDid && ethProvider && !client) {
      ComposeApolloClient(ethProvider, sessionDid)
        .then((res) => {
          console.log("no session: ", { res });
          if (res?.sessionString) {
            secureLocalStorage.setItem("sessionDid", res.sessionString);
            setClient(res.client);
          }
        })
        .catch(console.error);
    }
  }, [ethProvider, client, sessionDid]);

  if (!client)
    return (
      <>
        <Head>
          <title>Tartarus</title>
          <meta name="description" content="mystikó" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Login setEthProvider={setEthProvider} />;
      </>
    );

  if (client) {
    return (
      <ApolloProvider client={client}>
        <Head>
          <title>Tartarus</title>
          <meta name="description" content="mystikó" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {/* <Layout> */}
        <Component {...pageProps} ethProvider={ethProvider} />
        {/* </Layout> */}
      </ApolloProvider>
    );
  }
};

export default MyApp;
