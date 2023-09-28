import { gql } from "~/__generated__/gql";

// Tartarus username mutation
const CREATE_TARTARUSPROFILE = gql(`
  mutation CREATE_TARTARUSPROFILE($i: CreateTartarusProfileInput!) {
    createTartarusProfile(input: $i) {
      viewer {
        id
        isViewer
        messageList(first: 10) {
          edges {
            node {
              createdAt
              id
              message
              roomId
              room {
                id
                key
              }
            }
          }
        }
        tartarusProfile {
          createdAt
          displayName
          id
          profilePicture
          friends {
            id
            isViewer
          }
        }
      }
    }
  }
`);

export { CREATE_TARTARUSPROFILE };
