import { useLazyQuery, useMutation } from "@apollo/client";
import { dagCbor, type DAGCBOR } from "@helia/dag-cbor";
import { createHelia } from "helia";
import { useEffect, useState } from "react";
import { type TartarusProfile } from "~/__generated__/graphql";
import { UPDATE_TARTARUS_PROFILE } from "~/api/apollo/mutations";
import { GET_TARTARUS_PROFILE } from "~/api/apollo/querys";
import { uploadImageHelia } from "~/api/helia";
import PageWrapper from "~/components/PageWrapper";
import MainChat from "~/components/chat/MainChat";

export default function Home() {
  const [helia, setHelia] = useState<DAGCBOR>();
  const [imageBuffer, setImageBuffer] = useState<Buffer>();

  /* --------------------------<graphql>-------------------------------------------- */
  const [
    getProfile,
    { loading: getProfileLoading, error: getProfileError, data: profileData },
  ] = useLazyQuery(GET_TARTARUS_PROFILE);

  const [
    updateProfile,
    { loading: updateProfileLoading, data: updateProfileData },
  ] = useMutation(UPDATE_TARTARUS_PROFILE);
  /* ------------------------------------------------------------------------------- */

  useEffect(() => {
    if (!profileData) {
      void getProfile();
    } else {
      console.log({
        pic: profileData?.viewer?.tartarusProfile?.profilePicture,
      });
    }

    if (!helia) {
      createHelia()
        .then((res) => {
          console.log({ res });
          const d = dagCbor(res);
          console.log({ d });
          setHelia(d);
        })
        .catch(console.error);
    }
    console.log({ profileData });
  }, [profileData, getProfile, helia]);

  useEffect(() => {
    if (imageBuffer && helia) {
      const updateTartarusProfilePicture = (helia: DAGCBOR, buffer: Buffer) => {
        try {
          uploadImageHelia(helia, buffer)
            .then((cid) => {
              if (cid) {
                if (profileData?.viewer?.tartarusProfile?.id && cid) {
                  updateProfile({
                    variables: {
                      i: {
                        id: profileData?.viewer?.tartarusProfile?.id,
                        content: { profilePicture: cid },
                      },
                    },
                  })
                    .then((res) => {
                      console.log({ res });
                    })
                    .catch(console.error);
                }
              }
            })
            .catch(console.error);
        } catch (err) {
          console.error(err);
        }
      };
      updateTartarusProfilePicture(helia, imageBuffer);
    }
  }, [
    imageBuffer,
    helia,
    profileData?.viewer?.tartarusProfile?.id,
    updateProfile,
    profileData?.viewer?.tartarusProfile?.profilePicture,
  ]);

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
