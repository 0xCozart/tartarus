// This is an auto-generated file, do not edit manually
import { type RuntimeCompositeDefinition } from "@composedb/types";

export const definition: RuntimeCompositeDefinition = {
  models: {
    Message: {
      id: "kjzl6hvfrbw6c7m9jvlhtecmwdehyju1d4ia9k2qg6mk61o44sg3i6oaq5wjiu0",
      accountRelation: { type: "list" },
    },
    ProxyRouter: {
      id: "kjzl6hvfrbw6c5c38msbv9tnwhugb57fyk3c13rn1nl06e8ynrj6v2fxkfau74p",
      accountRelation: { type: "single" },
    },
    Room: {
      id: "kjzl6hvfrbw6c5oy23d7tetwbj46qlhwstbca77t6c6rpd7notfm8h1kcz2nkz0",
      accountRelation: { type: "list" },
    },
  },
  objects: {
    Message: {
      sender: { type: "string", required: true },
      message: { type: "string", required: false },
      recipient: { type: "string", required: true },
      dateTimeCreated: { type: "datetime", required: true },
    },
    ProxyRouter: {
      chats: {
        type: "list",
        required: false,
        item: { type: "string", required: false },
      },
      rooms: {
        type: "list",
        required: false,
        item: { type: "string", required: false },
      },
      friends: {
        type: "list",
        required: false,
        item: { type: "string", required: false },
      },
      displayName: { type: "string", required: true },
    },
    Room: {
      key: { type: "string", required: true },
      members: {
        type: "list",
        required: false,
        item: { type: "string", required: false },
      },
      messages: {
        type: "list",
        required: false,
        item: { type: "string", required: false },
      },
      roomName: { type: "string", required: true },
    },
  },
  enums: {},
  accountData: {
    messageList: { type: "connection", name: "Message" },
    proxyRouter: { type: "node", name: "ProxyRouter" },
    roomList: { type: "connection", name: "Room" },
  },
};
