import { type RuntimeCompositeDefinition } from "@composedb/types/dist";

// This is an auto-generated file, do not edit manually
export const definition: RuntimeCompositeDefinition = {
  models: {
    Room: {
      id: "kjzl6hvfrbw6c7hj1ixkcvz9tef4kcwyvj3m72vuydal3dhq39jcu48r5dhmybv",
      accountRelation: { type: "list" },
    },
    Message: {
      id: "kjzl6hvfrbw6ca9qciixrm7e69vg8m5w107girgllhvae4a0uabmlofes75s8tm",
      accountRelation: { type: "list" },
    },
    TartarusProfile: {
      id: "kjzl6hvfrbw6c5azxqedlgqluxyg8aev9aktfem5li3kcwdkpff3pna35ithd3u",
      accountRelation: { type: "single" },
    },
  },
  objects: {
    Room: {
      key: { type: "string", required: true },
      members: {
        type: "list",
        required: false,
        item: { type: "did", required: false },
        indexed: true,
      },
      roomName: { type: "string", required: true, indexed: true },
      createdAt: { type: "datetime", required: true, indexed: true },
      tartarusProfileId: { type: "streamid", required: true },
      messages: {
        type: "view",
        viewType: "relation",
        relation: {
          source: "queryConnection",
          model:
            "kjzl6hvfrbw6ca9qciixrm7e69vg8m5w107girgllhvae4a0uabmlofes75s8tm",
          property: "roomId",
        },
      },
    },
    Message: {
      roomId: { type: "streamid", required: true },
      sender: { type: "did", required: true, indexed: true },
      message: { type: "string", required: false, indexed: true },
      createdAt: { type: "datetime", required: true, indexed: true },
      room: {
        type: "view",
        viewType: "relation",
        relation: {
          source: "document",
          model:
            "kjzl6hvfrbw6c7hj1ixkcvz9tef4kcwyvj3m72vuydal3dhq39jcu48r5dhmybv",
          property: "roomId",
        },
      },
    },
    TartarusProfile: {
      friends: {
        type: "list",
        required: false,
        item: { type: "did", required: false },
        indexed: true,
      },
      createdAt: { type: "datetime", required: true, indexed: true },
      displayName: { type: "string", required: true },
      profilePicture: { type: "string", required: true },
      rooms: {
        type: "view",
        viewType: "relation",
        relation: {
          source: "queryConnection",
          model:
            "kjzl6hvfrbw6c7hj1ixkcvz9tef4kcwyvj3m72vuydal3dhq39jcu48r5dhmybv",
          property: "TartarusProfileId",
        },
      },
    },
  },
  enums: {},
  accountData: {
    roomList: { type: "connection", name: "Room" },
    messageList: { type: "connection", name: "Message" },
    tartarusProfile: { type: "node", name: "TartarusProfile" },
  },
};
