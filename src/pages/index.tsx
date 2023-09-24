import { GET_TARTARUS_PROFILE } from "~/api/apollo/querys";
import { SignUpTerminal } from "~/components/terminals";
import { useEffect } from "react";
import { useLazyQuery } from "@apollo/client";

export default function Home({}) {
  const [getProfile, { loading, error, data }] =
    useLazyQuery(GET_TARTARUS_PROFILE);

  useEffect(() => {
    void getProfile();
    console.log({ data });
  }, [getProfile, data]);

  // if (data?.viewer?.tartarusProfile?.displayName)
  //   return (
  //     <>
  //       <HomeChat />
  //     </>
  //   );

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
