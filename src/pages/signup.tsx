import { useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import { type CreateTartarusProfileInput } from "~/__generated__/graphql";
import { CREATE_TARTARUSPROFILE } from "~/api/apollo/mutations";
import { SignUpTerminal } from "~/components/terminals";

const SignUp = () => {
  const [createProfile, { data }] = useMutation(CREATE_TARTARUSPROFILE);
  const [mutationData, setMutationData] =
    useState<CreateTartarusProfileInput>();

  useEffect(() => {
    if (mutationData?.content.displayName) {
      void createProfile({ variables: { i: { ...mutationData } } });
    }
    console.log({ data });
  }, [mutationData, createProfile, data]);

  return (
    <div>
      <>
        <main className="flex min-h-screen flex-col items-center justify-center">
          <div className="block max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <SignUpTerminal setMutationData={setMutationData} />
            <p className="font-normal text-gray-700 dark:text-gray-400">{}</p>
          </div>
        </main>
      </>
    </div>
  );
};

export default SignUp;
