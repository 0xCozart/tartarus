import { useLazyQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { type TartarusProfile } from "~/__generated__/graphql";
import { GET_TARTARUS_PROFILE } from "~/api/apollo/querys";
import PageWrapper from "~/components/PageWrapper";
import MainChat from "~/components/chat/MainChat";
import { HomeProps } from ".";

export default function Home({ ethProvider }: HomeProps) {
  const [getProfile, { loading, error, data }] =
    useLazyQuery(GET_TARTARUS_PROFILE);
  const [imageBuffer, setImageBuffer] = useState();

  const handleImageUpload = (buffer) => {
    uploadImageHelia;
  };

  useEffect(() => {
    if (imageBuffer) {
    }
  }, []);

  useEffect(() => {
    void getProfile();
    // console.log({ data });
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
        />
      </PageWrapper>
    );
  }
}
