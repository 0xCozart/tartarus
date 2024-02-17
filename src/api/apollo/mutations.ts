import { gql } from "~/__generated__/gql";

// Tartarus username mutation
const CREATE_TARTARUS_PROFILE = gql(`
  mutation CreateTartarusProfile($i: CreateTartarusProfileInput!) {
    createTartarusProfile(input: $i) {
      viewer {
        id
        tartarusProfile {
          createdAt
          displayName
          id
          profilePictureCid
          friends {
            id
          }
        }
      }
    }
  }
`);

const UPDATE_TARTARUS_PROFILE = gql(`
  mutation UpdateProfilePicture($i: UpdateTartarusProfileInput!) {
    updateTartarusProfile(input: $i) {
      clientMutationId
       viewer {
        id
        isViewer
        tartarusProfile {
          createdAt
          displayName
          id
          profilePictureCid
        }
      }
    }
  }
`);

const CREATE_PUBLIC_ENCRYPTION_DID = ``;
const UPDATE_PUBLIC_ENCRYPTION_DID = ``;

export { CREATE_TARTARUS_PROFILE, UPDATE_TARTARUS_PROFILE };
