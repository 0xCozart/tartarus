import { gql } from "~/__generated__/gql";

const GET_TARTARUS_PROFILE = gql(`
  query TartarusProfileQuery {
    viewer {
      tartarusProfile {
        createdAt
        displayName
        friends {
          id
        }
        id
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

export { GET_TARTARUS_PROFILE };
