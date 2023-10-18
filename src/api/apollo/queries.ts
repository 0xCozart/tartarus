import { gql } from "~/__generated__/gql";

const GET_TARTARUS_PROFILE = gql(`
  query TartarusProfile {
    viewer {
      id
      tartarusProfile {
        id
        createdAt
        displayName
        profilePictureCid
        friends {
          id
        }
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
        }
      }
    }
    roomCount
  }
`);

const GET_VIEWER_ROOMS_W_MEMBERS_MESSAGES = gql(`
  query ViewerRoomsWMembersMessages {
    viewer {
      roomList(first: 10) {
        edges {
          cursor
          node {
            id
            createdAt
            key
            roomName
            members {
              id
              isViewer
              messageList(first: 10) {
                edges {
                  node {
                    id
                    createdAt
                    message
                    roomId
                  }
                }
              }
            }
            messages(first: 10) {
              edges {
                cursor
                node {
                  id
                  createdAt
                  message
                  roomId
                  sender {
                    id
                    createdAt
                    displayName
                    profilePictureCid
                  }
                }
              }
            }
          }
        }
        pageInfo {
          startCursor
        }
      }
      roomListCount
    }
  }
`);

export { GET_ROOMS, GET_TARTARUS_PROFILE, GET_VIEWER_ROOMS_W_MEMBERS_MESSAGES };
