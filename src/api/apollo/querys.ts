import { gql } from "~/__generated__/gql";

const GET_TARTARUS_PROFILE = gql(`
  query TartarusProfile {
    viewer {
      id
      tartarusProfile {
        createdAt
        displayName
        friends {
          id
        }
        id
        profilePicture
        rooms (first: 10) {
          edges {
            node {
              id
            }
          }
        }
      }
    }
  }
`);

const GET_ROOMS = gql(`
  query Rooms {
    roomIndex(first: 10) {
      edges {
        cursor
        node {
          id
          createdAt
          key
          roomName
          tartarusProfileId
        }
      }
    }
    roomCount
  }
`);

export { GET_ROOMS, GET_TARTARUS_PROFILE };
