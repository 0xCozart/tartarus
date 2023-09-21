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
import ComposeApolloClient, { type EthProvider } from "~/api/composedb/client";
import Login from "~/pages/login";
import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  const [client, setClient] = useState<ApolloClient<NormalizedCacheObject>>();
  const [ethProvider, setEthProvider] = useState<Awaited<EthProvider>>({
    provider: undefined,
    signer: undefined,
  });

  // Adds messages only in a dev environment
  loadErrorMessages();

  useEffect(() => {
    if (ethProvider && !client) {
      ComposeApolloClient(ethProvider)
        .then((authedClient) => setClient(authedClient))
        .catch(console.error);
    }
  }, [ethProvider, client]);

  if (!client)
    return (
      <>
        <Head>
          <title>Tartarus</title>
          <meta name="description" content="mystikó" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Login ethProvider={ethProvider} setEthProvider={setEthProvider} />;
      </>
    );

  if (client)
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
};

export default MyApp;
