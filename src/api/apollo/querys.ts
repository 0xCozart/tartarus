import { gql } from "@apollo/client";

const GET_TARTARUS_PROFILE = gql`
  query MyQuery {
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
`;

export { GET_TARTARUS_PROFILE };
