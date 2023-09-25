import { useLazyQuery } from "@apollo/client";
import { useEffect } from "react";
import { type EthProvider } from "~/api/apollo/client";
import { GET_TARTARUS_PROFILE } from "~/api/apollo/querys";
import HomeChat from "~/components/chat/HomeChat";
import { SignUpTerminal } from "~/components/terminals";

export default function Home(ethProvider: EthProvider) {
  const [getProfile, { loading, error, data }] =
    useLazyQuery(GET_TARTARUS_PROFILE);

  useEffect(() => {
    void getProfile();
    console.log({ data });
  }, [getProfile, data]);

  if (data?.viewer?.tartarusProfile?.displayName) {
    console.log("home page", { ethProvider });
    return (
      <>
        <HomeChat provider={ethProvider.provider} signer={ethProvider.signer} />
      </>
    );
  }

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="block max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <SignUpTerminal />
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {data?.viewer?.tartarusProfile?.displayName}
          </p>
        </div>
      </main>
    </>
  );
}
