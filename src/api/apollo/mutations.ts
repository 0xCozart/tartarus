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
          profilePicture
        }
      }
    }
  }
`);

const CREATE_ROOM = gql(`
  mutation CreateRoom($i: CreateRoomInput!) {
    createRoom(input: $i) {
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

export { CREATE_TARTARUS_PROFILE, UPDATE_TARTARUS_PROFILE };
