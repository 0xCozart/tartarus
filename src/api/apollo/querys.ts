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
        profilePicture
      }
    }
  }
`);

export { GET_TARTARUS_PROFILE };
