import { gql } from "~/__generated__/gql";

// Tartarus username mutation
const CREATE_TARTARUSPROFILE = gql(`
  mutation CREATE_TARTARUSPROFILE($i: CreateTartarusProfileInput!) {
    createTartarusProfile(input: $i) {
      document {
        displayName
        friends
        id
        chats
        rooms
      }
    }
  }
`);

export { CREATE_TARTARUSPROFILE };
