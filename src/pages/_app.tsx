"use client";

import {
  ApolloProvider,
  type ApolloClient,
  type NormalizedCacheObject,
} from "@apollo/client";
import { loadErrorMessages } from "@apollo/client/dev";
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
  // const [isAuthed, setIsAuthed] = useState(false);
  // const router = useRouter();
  const [ethProvider, setEthProvider] = useState<Awaited<EthProvider>>({
    provider: undefined,
    signer: undefined,
  });
  const sessionDid = secureLocalStorage.getItem("sessionDid") as string;

  // Adds messages only in a dev environment
  loadErrorMessages();

  useEffect(() => {
    if (sessionDid && !client) {
      DIDSession.fromSession(sessionDid)
        .then((res) => {
          if (!res.isExpired) {
            const ethProvider = getEthWindowProvider();
            ComposeApolloClient(ethProvider, sessionDid)
              .then((res) => {
                if (res?.sessionString) {
                  console.log({ res });
                  setClient(res.client);
                }
              })
              .catch(console.error);
          }
        })
        .catch((err) => console.error(err));
    } else if (ethProvider && !client) {
      ComposeApolloClient(ethProvider, sessionDid)
        .then((res) => {
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
