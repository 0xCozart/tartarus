import { gql } from "~/__generated__/gql";

// Tartarus username mutation
const CREATE_TARTARUS_PROFILE = gql(`
  mutation CreateTartarusProfile($content: CreateTartarusProfileInput!) {
    createTartarusProfile(input: $content) {
      viewer {
        id
        tartarusProfile {
          createdAt
          displayName
          id
          profilePicture
          friends {
            id
          }
        }
      }
    }
  }
`);

const UPDATE_TARTARUS_PROFILE = gql(`
  mutation UpdateProfilePicture($content: UpdateTartarusProfileInput!) {
    updateTartarusProfile(input: $content) {
      clientMutationId
       viewer {
        id
        isViewer
        tartarusProfile {
          createdAt
          displayName
          id
          profilePicture
        }
      }
    }
  }
`);

const CREATE_ROOM = gql(`
  mutation CreateRoom($content: CreateRoomInput!) {
    createRoom(input: $content) {
      document {
        createdAt
        id
        key
        members {
          id
        }
        messages(first: 10) {
          edges {
            node {
              id
              message
            }
          }
        }
        roomName
        tartarusProfileId
      }
    }
  }
`);

export { CREATE_ROOM, CREATE_TARTARUS_PROFILE, UPDATE_TARTARUS_PROFILE };
