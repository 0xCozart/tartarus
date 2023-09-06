import { gql } from "@apollo/client";

// Tartarus username mutation
const CREATE_TARTARUSPROFILE = gql`
  mutation CREATE_TARTARUSPROFILE($displayName: String!) {
    createTartarusProfile(displayName: $displayName) {
      document {
        displayName
        friends
        id
        chats
        rooms
      }
    }
  }
`;

export { CREATE_TARTARUSPROFILE };
