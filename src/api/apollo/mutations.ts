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
  mutation UpdateprofilePictureCid($content: UpdateTartarusProfileInput!) {
    updateTartarusProfile(input: $content) {
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
      }
    }
  }
`);

const CREATE_MESSAGE = gql(`
  mutation CreateMessage($content: CreateMessageInput!) {
    createMessage(input: $content)
     {
      document {
        createdAt
        id
        message
        roomId
        room {
          createdAt
          id
          key
          roomName
        }
      }
    }
  }
`);

export {
  CREATE_MESSAGE,
  CREATE_ROOM,
  CREATE_TARTARUS_PROFILE,
  UPDATE_TARTARUS_PROFILE,
};
