import { gql } from "@apollo/client";

// Tartarus username mutation
const DISPLAYNAME_MUTATION = gql`
  mutation displayname_mutation($displayName: String!) {
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

export { DISPLAYNAME_MUTATION };
