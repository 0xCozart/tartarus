import { useLazyQuery, useMutation } from "@apollo/client";
import { type DAGCBOR } from "@helia/dag-cbor";
import { useEffect, useState } from "react";
import { type TartarusProfile } from "~/__generated__/graphql";
import { type EthProvider } from "~/api/apollo/client";
import { UPDATE_TARTARUS_PROFILE } from "~/api/apollo/mutations";
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
  const [imageBuffer, setImageBuffer] = useState<Buffer>();

  const [
    getProfile,
    { loading: getProfileLoading, error: getProfileError, data: profileData },
  ] = useLazyQuery(GET_TARTARUS_PROFILE);
  const [
    updateProfile,
    { loading: updateProfileLoading, data: updateProfileData },
  ] = useMutation(UPDATE_TARTARUS_PROFILE);

  const updateTartarusProfilePicture = (helia: DAGCBOR, buffer: Buffer) => {
    try {
      const imageData = uploadImageHelia(helia, buffer);
      if (profileData?.viewer?.tartarusProfile?.id) {
        updateProfile({
          variables: {
            i: {
              id: profileData?.viewer?.tartarusProfile?.id,
              content: { displayName: imageData },
            },
          },
        })
          .then((res) => {
            console.log(res);
          })
          .catch(console.error);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (imageBuffer) {
      updateTartarusProfilePicture(helia, imageBuffer);
    }
  }, [imageBuffer, helia]);

  useEffect(() => {
    void getProfile();
    console.log({ profileData });
  }, [getProfile, profileData]);

  if (profileData?.viewer?.tartarusProfile?.displayName) {
    // console.log("home page", { ethProvider });
    return (
      <PageWrapper
        displayName={profileData.viewer.tartarusProfile.displayName}
        profilePictureUri=""
      >
        <MainChat
          tartarusProfile={
            profileData.viewer.tartarusProfile as TartarusProfile
          }
          setImageBuffer={setImageBuffer}
        />
      </PageWrapper>
    );
  }
}
