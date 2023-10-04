import { useLazyQuery } from "@apollo/client";
import { type DAGCBOR } from "@helia/dag-cbor";
import { useEffect, useState } from "react";
import { type TartarusProfile } from "~/__generated__/graphql";
import { type EthProvider } from "~/api/apollo/client";
import { GET_TARTARUS_PROFILE } from "~/api/apollo/querys";
import { uploadImageHelia } from "~/api/helia";
import PageWrapper from "~/components/PageWrapper";
import MainChat from "~/components/chat/MainChat";

type HomeProps = {
  ethProvider: EthProvider;
  profile: TartarusProfile;
  helia: DAGCBOR;
};

export default function Home({ ethProvider, helia }: HomeProps) {
  const [getProfile, { loading, error, data }] =
    useLazyQuery(GET_TARTARUS_PROFILE);

  const [imageBuffer, setImageBuffer] = useState<Buffer>();

  const imageUpload = (buffer: Buffer) => {
    return uploadImageHelia(helia, buffer);
  };

  const updateTartarusProfilePicture = (cid: string | null) => {};

  // useEffect(() => {
  //   if (imageBuffer) {
  //   }
  // }, []);

  useEffect(() => {
    void getProfile();
    console.log({ data });
  }, [getProfile, data]);

  if (data?.viewer?.tartarusProfile?.displayName) {
    // console.log("home page", { ethProvider });
    return (
      <PageWrapper
        displayName={data.viewer.tartarusProfile.displayName}
        profilePictureUri=""
      >
        <MainChat
          tartarusProfile={data.viewer.tartarusProfile as TartarusProfile}
          setImageBuffer={setImageBuffer}
        />
      </PageWrapper>
    );
  }
}
