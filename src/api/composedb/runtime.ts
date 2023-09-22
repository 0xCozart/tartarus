import { type RuntimeCompositeDefinition } from "@composedb/types/dist";

// This is an auto-generated file, do not edit manually
export const definition: RuntimeCompositeDefinition = {
  models: {
    Message: {
      id: "kjzl6hvfrbw6c6urd73ailahq0t1uxipfi8rjz3gpfpcbsc90lyomtff0qtp4fd",
      accountRelation: { type: "list" },
    },
    Room: {
      id: "kjzl6hvfrbw6c5oy23d7tetwbj46qlhwstbca77t6c6rpd7notfm8h1kcz2nkz0",
      accountRelation: { type: "list" },
    },
    TartarusProfile: {
      id: "kjzl6hvfrbw6caoois5dxfdki8dht61853afifxupy9cjst17lkt40qgzrp00t8",
      accountRelation: { type: "single" },
    },
  },
  objects: {
    Message: {
      sender: { type: "did", required: true, indexed: true },
      message: { type: "string", required: false },
      createdAt: { type: "datetime", required: true, indexed: true },
      recipient: { type: "string", required: true, indexed: true },
    },
    Room: {
      key: { type: "string", required: true },
      members: {
        type: "list",
        required: false,
        item: { type: "string", required: false },
        indexed: true,
      },
      messages: {
        type: "list",
        required: false,
        item: { type: "string", required: false },
        indexed: true,
      },
      roomName: { type: "string", required: true },
    },
    TartarusProfile: {
      chats: {
        type: "list",
        required: false,
        item: { type: "string", required: false },
        indexed: true,
      },
      rooms: {
        type: "list",
        required: false,
        item: { type: "string", required: false },
        indexed: true,
      },
      friends: {
        type: "list",
        required: false,
        item: { type: "string", required: false },
        indexed: true,
      },
      displayName: { type: "string", required: true },
    },
  },
  enums: {},
  accountData: {
    messageList: { type: "connection", name: "Message" },
    roomList: { type: "connection", name: "Room" },
    tartarusProfile: { type: "node", name: "TartarusProfile" },
  },
};
