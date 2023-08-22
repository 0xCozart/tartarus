import {
  ApolloProvider,
  type ApolloClient,
  type NormalizedCacheObject,
} from "@apollo/client";
import { type AppType } from "next/dist/shared/lib/utils";
import Head from "next/head";
import { useEffect, useState } from "react";
import ComposeApolloClient from "~/api/composedb/client";
import NoAccess from "~/pages/NoAccess";
import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  const [client, setClient] = useState<ApolloClient<NormalizedCacheObject>>();
  const [providerSigner, setProviderSigner] = useState();

  useEffect(() => {
    if (providerSigner) {
      ComposeApolloClient(providerSigner)
        .then((authedClient) => setClient(authedClient))
        .catch(console.error);
    }
  }, [providerSigner]);

  if (client)
    return (
      <ApolloProvider client={client}>
        <Head>
          <title>Nabu</title>
          <meta name="description" content="DAO social tooling" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {/* <Layout> */}
        <Component {...pageProps} setProviderSigner={setProviderSigner} />
        {/* </Layout> */}
      </ApolloProvider>
    );

  return <NoAccess />;
};

export default MyApp;
