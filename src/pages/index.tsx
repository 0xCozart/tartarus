import { useLazyQuery, useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import { type TartarusProfile } from "~/__generated__/graphql";
import { UPDATE_TARTARUS_PROFILE } from "~/api/apollo/mutations";
import { GET_TARTARUS_PROFILE } from "~/api/apollo/querys";
import PageWrapper from "~/components/PageWrapper";
import MainChat from "~/components/chat/MainChat";

export default function Home() {
  const [file, setFile] = useState<File>();

  /* --------------------------<graphql>-------------------------------------------- */
  const [
    getProfile,
    { loading: profileLoading, error: profileError, data: profileData },
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
  }, [profileData, getProfile]);

  useEffect(() => {
    const uploadFilePinata = async () => {
      if (file) {
        try {
          const formData = new FormData();
          formData.append("file", file);
          const res = await fetch("/api/ipfs/files", {
            method: "POST",
            body: formData,
          });
          res
            .text()
            .then((res) => console.log({ res }))
            .catch(console.error);
          return await res.text();
        } catch (err) {
          console.error(err);
        }
      }
    };

    if (file) {
      uploadFilePinata()
        .then((res) => {
          if (res && profileData?.viewer?.tartarusProfile?.id) {
            console.log("upload", res);
            updateProfile({
              variables: {
                i: {
                  id: profileData?.viewer?.tartarusProfile?.id,
                  content: {
                    profilePicture: res,
                  },
                },
              },
            })
              .then((res) => {
                console.log("updateProfile res: ", res);
                void getProfile();
              })
              .catch(console.error);
          }
        })
        .catch(console.error);
    }
  }, [
    getProfile,
    file,
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
          setFile={setFile}
        />
      </PageWrapper>
    );
  }
}
