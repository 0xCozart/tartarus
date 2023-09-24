import { gql } from "~/__generated__/gql";

const GET_TARTARUS_PROFILE = gql(`
  query TartarusProfileQuery {
    viewer {
      tartarusProfile {
        displayName
        friends
        id
        rooms
        chats
      }
    }
  }
`);

export { GET_TARTARUS_PROFILE };
