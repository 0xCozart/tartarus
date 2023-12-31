/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation CreateTartarusProfile($content: CreateTartarusProfileInput!) {\n    createTartarusProfile(input: $content) {\n      viewer {\n        id\n        tartarusProfile {\n          createdAt\n          displayName\n          id\n          profilePictureCid\n          friends {\n            id\n          }\n        }\n      }\n    }\n  }\n": types.CreateTartarusProfileDocument,
    "\n  mutation UpdateprofilePictureCid($content: UpdateTartarusProfileInput!) {\n    updateTartarusProfile(input: $content) {\n      clientMutationId\n       viewer {\n        id\n        isViewer\n        tartarusProfile {\n          id\n          createdAt\n          displayName\n          profilePictureCid\n        }\n      }\n    }\n  }\n": types.UpdateprofilePictureCidDocument,
    "\n  mutation CreateRoom($content: CreateRoomInput!) {\n    createRoom(input: $content) {\n      document {\n        createdAt\n        id\n        key\n        members {\n          id\n        }\n        messages(first: 10) {\n          edges {\n            node {\n              id\n              message\n            }\n          }\n        }\n        roomName\n      }\n    }\n  }\n": types.CreateRoomDocument,
    "\n  mutation CreateMessage($content: CreateMessageInput!) {\n    createMessage(input: $content)\n     {\n      document {\n        createdAt\n        id\n        message\n        roomId\n        room {\n          createdAt\n          id\n          key\n          roomName\n        }\n      }\n    }\n  }\n": types.CreateMessageDocument,
    "\n  query TartarusProfile {\n    viewer {\n      id\n      tartarusProfile {\n        id\n        createdAt\n        displayName\n        profilePictureCid\n        friends {\n          id\n        }\n        rooms (first: 10) {\n          edges {\n            node {\n              id\n            }\n          }\n        }\n      }\n    }\n  }\n": types.TartarusProfileDocument,
    "\n  query Rooms {\n    roomIndex(first: 10) {\n      edges {\n        cursor\n        node {\n          id\n          createdAt\n          key\n          roomName\n        }\n      }\n    }\n    roomCount\n  }\n": types.RoomsDocument,
    "\n  query ViewerRoomsWMembersMessages {\n    viewer {\n      roomList(first: 10) {\n        edges {\n          cursor\n          node {\n            id\n            createdAt\n            key\n            roomName\n            members {\n              id\n              isViewer\n              messageList(first: 10) {\n                edges {\n                  node {\n                    id\n                    createdAt\n                    message\n                    roomId\n                  }\n                }\n              }\n            }\n            messages(first: 10) {\n              edges {\n                cursor\n                node {\n                  id\n                  createdAt\n                  message\n                  roomId\n                  sender {\n                    id\n                    createdAt\n                    displayName\n                    profilePictureCid\n                  }\n                }\n              }\n            }\n          }\n        }\n        pageInfo {\n          startCursor\n        }\n      }\n      roomListCount\n    }\n  }\n": types.ViewerRoomsWMembersMessagesDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation CreateTartarusProfile($content: CreateTartarusProfileInput!) {\n    createTartarusProfile(input: $content) {\n      viewer {\n        id\n        tartarusProfile {\n          createdAt\n          displayName\n          id\n          profilePictureCid\n          friends {\n            id\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation CreateTartarusProfile($content: CreateTartarusProfileInput!) {\n    createTartarusProfile(input: $content) {\n      viewer {\n        id\n        tartarusProfile {\n          createdAt\n          displayName\n          id\n          profilePictureCid\n          friends {\n            id\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UpdateprofilePictureCid($content: UpdateTartarusProfileInput!) {\n    updateTartarusProfile(input: $content) {\n      clientMutationId\n       viewer {\n        id\n        isViewer\n        tartarusProfile {\n          id\n          createdAt\n          displayName\n          profilePictureCid\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateprofilePictureCid($content: UpdateTartarusProfileInput!) {\n    updateTartarusProfile(input: $content) {\n      clientMutationId\n       viewer {\n        id\n        isViewer\n        tartarusProfile {\n          id\n          createdAt\n          displayName\n          profilePictureCid\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation CreateRoom($content: CreateRoomInput!) {\n    createRoom(input: $content) {\n      document {\n        createdAt\n        id\n        key\n        members {\n          id\n        }\n        messages(first: 10) {\n          edges {\n            node {\n              id\n              message\n            }\n          }\n        }\n        roomName\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation CreateRoom($content: CreateRoomInput!) {\n    createRoom(input: $content) {\n      document {\n        createdAt\n        id\n        key\n        members {\n          id\n        }\n        messages(first: 10) {\n          edges {\n            node {\n              id\n              message\n            }\n          }\n        }\n        roomName\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation CreateMessage($content: CreateMessageInput!) {\n    createMessage(input: $content)\n     {\n      document {\n        createdAt\n        id\n        message\n        roomId\n        room {\n          createdAt\n          id\n          key\n          roomName\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation CreateMessage($content: CreateMessageInput!) {\n    createMessage(input: $content)\n     {\n      document {\n        createdAt\n        id\n        message\n        roomId\n        room {\n          createdAt\n          id\n          key\n          roomName\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query TartarusProfile {\n    viewer {\n      id\n      tartarusProfile {\n        id\n        createdAt\n        displayName\n        profilePictureCid\n        friends {\n          id\n        }\n        rooms (first: 10) {\n          edges {\n            node {\n              id\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query TartarusProfile {\n    viewer {\n      id\n      tartarusProfile {\n        id\n        createdAt\n        displayName\n        profilePictureCid\n        friends {\n          id\n        }\n        rooms (first: 10) {\n          edges {\n            node {\n              id\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Rooms {\n    roomIndex(first: 10) {\n      edges {\n        cursor\n        node {\n          id\n          createdAt\n          key\n          roomName\n        }\n      }\n    }\n    roomCount\n  }\n"): (typeof documents)["\n  query Rooms {\n    roomIndex(first: 10) {\n      edges {\n        cursor\n        node {\n          id\n          createdAt\n          key\n          roomName\n        }\n      }\n    }\n    roomCount\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query ViewerRoomsWMembersMessages {\n    viewer {\n      roomList(first: 10) {\n        edges {\n          cursor\n          node {\n            id\n            createdAt\n            key\n            roomName\n            members {\n              id\n              isViewer\n              messageList(first: 10) {\n                edges {\n                  node {\n                    id\n                    createdAt\n                    message\n                    roomId\n                  }\n                }\n              }\n            }\n            messages(first: 10) {\n              edges {\n                cursor\n                node {\n                  id\n                  createdAt\n                  message\n                  roomId\n                  sender {\n                    id\n                    createdAt\n                    displayName\n                    profilePictureCid\n                  }\n                }\n              }\n            }\n          }\n        }\n        pageInfo {\n          startCursor\n        }\n      }\n      roomListCount\n    }\n  }\n"): (typeof documents)["\n  query ViewerRoomsWMembersMessages {\n    viewer {\n      roomList(first: 10) {\n        edges {\n          cursor\n          node {\n            id\n            createdAt\n            key\n            roomName\n            members {\n              id\n              isViewer\n              messageList(first: 10) {\n                edges {\n                  node {\n                    id\n                    createdAt\n                    message\n                    roomId\n                  }\n                }\n              }\n            }\n            messages(first: 10) {\n              edges {\n                cursor\n                node {\n                  id\n                  createdAt\n                  message\n                  roomId\n                  sender {\n                    id\n                    createdAt\n                    displayName\n                    profilePictureCid\n                  }\n                }\n              }\n            }\n          }\n        }\n        pageInfo {\n          startCursor\n        }\n      }\n      roomListCount\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;