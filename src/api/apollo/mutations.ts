import { gql } from "~/__generated__/gql";

// Tartarus username mutation
const CREATE_TARTARUSPROFILE = gql(`
  mutation CREATE_TARTARUSPROFILE($i: CreateTartarusProfileInput!) {
    createTartarusProfile(input: $i) {
      document {
        id
        createdAt
        displayName
        friends {
          id
        }
        rooms(first: 10) {
          edges {
            node {
              id
              key
              createdAt
            }
          }
        }
      }
    }
  }
`);

export { CREATE_TARTARUSPROFILE };
