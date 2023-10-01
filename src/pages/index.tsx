import { useLazyQuery } from "@apollo/client";
import { useEffect } from "react";
import { type TartarusProfile } from "~/__generated__/graphql";
import { type EthProvider } from "~/api/apollo/client";
import { GET_TARTARUS_PROFILE } from "~/api/apollo/querys";
import PageWrapper from "~/components/PageWrapper";
import HomeChat from "~/components/chat/HomeChat";

type HomeProps = {
  ethProvider: EthProvider;
  profile: TartarusProfile;
};

export default function Home({ ethProvider }: HomeProps) {
  const [getProfile, { loading, error, data }] =
    useLazyQuery(GET_TARTARUS_PROFILE);

  useEffect(() => {
    void getProfile();
    console.log({ data });
  }, [getProfile, data]);

  if (data?.viewer?.tartarusProfile?.displayName) {
    console.log("home page", { ethProvider });
    return (
      <div className="relative flex h-screen w-full overflow-hidden bg-white">
        <PageWrapper
          displayName={data.viewer.tartarusProfile.displayName}
          profilePictureUri=""
        >
          <HomeChat
            provider={ethProvider.provider}
            signer={ethProvider.signer}
          />
        </PageWrapper>
      </div>
    );
  }
}
