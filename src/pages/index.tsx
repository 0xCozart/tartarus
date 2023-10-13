import { useLazyQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { type TartarusProfile } from "~/__generated__/graphql";
import { UPDATE_TARTARUS_PROFILE } from "~/api/apollo/mutations";
import { GET_TARTARUS_PROFILE } from "~/api/apollo/querys";
import PageWrapper from "~/components/PageWrapper";
import MainChat from "~/components/chat/MainChat";
import { imageUriFromCid } from "~/utils";

export default function Home() {
  const [file, setFile] = useState<File>();
  const router = useRouter();

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
    if (!profileData) void getProfile();
  }, [profileData, getProfile]);

  useEffect(() => {
    const uploadFilePinata = async () => {
      if (file) {
        try {
          const formData = new FormData();
          formData.append("file", file);
          formData.append("name", file.name);
          const res = await fetch("/api/files", {
            method: "POST",
            body: formData,
          });
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
            updateProfile({
              variables: {
                content: {
                  id: profileData?.viewer?.tartarusProfile?.id,
                  content: {
                    profilePicture: res,
                  },
                },
              },
            })
              .then((res) => {
                void getProfile();
                setFile(undefined);
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
    return (
      <PageWrapper
        displayName={profileData.viewer.tartarusProfile.displayName}
        profilePictureUri={imageUriFromCid(
          profileData.viewer.tartarusProfile.profilePicture
        )}
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
