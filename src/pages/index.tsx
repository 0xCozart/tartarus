import { useLazyQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  type TartarusProfile,
  type TartarusProfileQuery,
  type UpdateprofilePictureCidMutation,
} from "~/__generated__/graphql";
import { UPDATE_TARTARUS_PROFILE } from "~/api/apollo/mutations";
import { GET_TARTARUS_PROFILE } from "~/api/apollo/querys";
import PageWrapper from "~/components/PageWrapper";
import MainChat from "~/components/core/MainChat";
import RoomForm from "~/components/core/RoomForm";
import { imageUriFromCid } from "~/utils";

export type ActiveTabRoutes = "chat" | "createRoom" | "profile";

export default function Home() {
  const [file, setFile] = useState<File>();
  const [activeTab, setActiveTab] = useState<ActiveTabRoutes>("chat");
  const router = useRouter();

  /* --------------------------<graphql>-------------------------------------------- */
  const [getProfile, getProfileResults] = useLazyQuery(GET_TARTARUS_PROFILE);
  const { loading: profileLoading, error: profileError } = getProfileResults;
  const { viewer } = getProfileResults.data as TartarusProfileQuery;

  const [updateProfile, updateProfileResults] = useMutation(
    UPDATE_TARTARUS_PROFILE
  );
  const { loading: profileMutationLoading, error: profileMutationError } =
    updateProfileResults;
  const { updateTartarusProfile: profileMutataionData } =
    updateProfileResults.data as UpdateprofilePictureCidMutation;
  /* ------------------------------------------------------------------------------- */

  useEffect(() => {
    if (!viewer?.tartarusProfile) void getProfile();
  }, [viewer, getProfile]);

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
          if (resObj && viewer?.tartarusProfile?.id) {
            updateProfile({
              variables: {
                content: {
                  id: viewer?.tartarusProfile?.id,
                  content: {
                    profilePictureCid: resObj.cid,
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
    viewer?.tartarusProfile?.id,
    updateProfile,
    viewer?.tartarusProfile?.profilePictureCid,
  ]);

  if (viewer?.tartarusProfile?.displayName) {
    return (
      <PageWrapper
        displayName={viewer.tartarusProfile.displayName}
        profilePictureUri={imageUriFromCid(
          viewer.tartarusProfile.profilePictureCid
        )}
        setActiveTab={setActiveTab}
        // setActiveTab={setActiveTab}
      >
        {activeTab === "chat" && (
          <MainChat
            tartarusProfile={viewer.tartarusProfile as TartarusProfile}
            setFile={setFile}
          />
        )}
        {activeTab === "createRoom" && (
          <RoomForm profileId={viewer.tartarusProfile.id} />
        )}
      </PageWrapper>
    );
  }
}
