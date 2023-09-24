"use client";

import {
  ApolloProvider,
  type ApolloClient,
  type NormalizedCacheObject,
} from "@apollo/client";
import { loadErrorMessages } from "@apollo/client/dev";
import { type AppType } from "next/dist/shared/lib/utils";
import Head from "next/head";
import { useEffect, useState } from "react";
import secureLocalStorage from "react-secure-storage";
import ComposeApolloClient, { type EthProvider } from "~/api/apollo/client";
import Login from "~/pages/login";
import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  const [client, setClient] = useState<ApolloClient<NormalizedCacheObject>>();
  const [ethProvider, setEthProvider] = useState<Awaited<EthProvider>>({
    provider: undefined,
    signer: undefined,
  });

  const sessionDid = secureLocalStorage.getItem("sessionDid") as string;

  // Adds messages only in a dev environment
  loadErrorMessages();

  useEffect(() => {
    if (ethProvider && !client) {
      ComposeApolloClient(ethProvider, sessionDid)
        .then((res) => {
          console.log({ res });
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
    console.log({ ethProvider, client });
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
