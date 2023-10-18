import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { type TartarusProfile } from "~/__generated__/graphql";
import { UPDATE_TARTARUS_PROFILE_DISPLAY_NAME } from "~/api/apollo/mutations";
import { GET_TARTARUS_PROFILE } from "~/api/apollo/queries";
import PageWrapper from "~/components/PageWrapper";
import MainChat from "~/components/core/MainChat";
import RoomForm from "~/components/core/RoomForm";
import { imageUriFromCid } from "~/utils";

export type ActiveTabRoutes = "chat" | "createRoom" | "profile";

export default function Home() {
  const [file, setFile] = useState<File>();
  const [activeTab, setActiveTab] = useState<ActiveTabRoutes>("chat");
  const router = useRouter();

  /* ---------------------------------<graphql>------------------------------------- */
  const {
    data: profileData,
    loading: profileLoading,
    error: profileError,
    refetch: refetchProfile,
  } = useQuery(GET_TARTARUS_PROFILE);

  const [updateProfile, { data: updateProfileData }] = useMutation(
    UPDATE_TARTARUS_PROFILE_DISPLAY_NAME
  );
  /* ------------------------------------------------------------------------------- */

  /**
   * puses to signup page via router if tartarusProfile == null
   */
  useEffect(() => {
    if (!profileLoading && !profileData?.viewer?.tartarusProfile) {
      void router.push("/signup");
    }

    console.log({ profileData });
  }, [profileData, profileLoading, router]);

  /**
   * handles pinata image upload
   * (will be moved to a custom hook)
   */
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
          let resObj;
          if (res) {
            resObj = JSON.parse(res) as { cid: string };
          }
          if (resObj && profileData?.viewer?.tartarusProfile?.id) {
            updateProfile({
              variables: {
                content: {
                  id: profileData?.viewer?.tartarusProfile?.id,
                  content: {
                    profilePictureCid: resObj.cid,
                  },
                },
              },
            })
              .then((res) => {
                void refetchProfile();
                setFile(undefined);
              })
              .catch(console.error);
          }
        })
        .catch(console.error);
    }
  }, [
    refetchProfile,
    file,
    profileData?.viewer?.tartarusProfile?.id,
    updateProfile,
    profileData?.viewer?.tartarusProfile?.profilePictureCid,
  ]);

  if (!profileLoading && profileData?.viewer?.tartarusProfile?.displayName) {
    return (
      <PageWrapper
        displayName={profileData?.viewer.tartarusProfile.displayName}
        profilePictureUri={imageUriFromCid(
          profileData.viewer.tartarusProfile.profilePictureCid
        )}
        setActiveTab={setActiveTab}
        // setActiveTab={setActiveTab}
      >
        {activeTab === "chat" && (
          <MainChat
            tartarusProfile={
              profileData?.viewer.tartarusProfile as TartarusProfile
            }
            setFile={setFile}
          />
        )}
        {activeTab === "createRoom" && (
          <RoomForm profileId={profileData?.viewer.tartarusProfile.id} />
        )}
      </PageWrapper>
    );
  }
}
