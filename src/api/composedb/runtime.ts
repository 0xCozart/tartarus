import { type RuntimeCompositeDefinition } from "@composedb/types/dist";

// This is an auto-generated file, do not edit manually
export const definition: RuntimeCompositeDefinition = {
  models: {
    Room: {
      interface: false,
      implements: [],
      id: "kjzl6hvfrbw6cah3f8dtbnge3b38xss2g5twhjtvi5zovfn51fvuhomxyhp1770",
      accountRelation: { type: "list" },
    },
    TartarusProfile: {
      interface: false,
      implements: [],
      id: "kjzl6hvfrbw6c9pdj2lt4zen2gx33ztcwyhvu6ygb3x6537867blkez0fi8a4nc",
      accountRelation: { type: "single" },
    },
    Message: {
      interface: false,
      implements: [],
      id: "kjzl6hvfrbw6c9qzu96sd94o3yekw6fe6v9zr6mof7cieesmdyih16sbxpu9qsr",
      accountRelation: { type: "list" },
    },
    PublicEncryptionDID: {
      interface: false,
      implements: [],
      id: "kjzl6hvfrbw6ca1t6q39ympc7qoij1m9kb5ckn3ribr7qqhi7a03axr3ptlqmuh",
      accountRelation: { type: "list" },
    },
  },
  objects: {
    Room: {
      key: { type: "string", required: true },
      members: {
        type: "list",
        required: false,
        item: { type: "did", required: false },
      },
      roomName: { type: "string", required: true },
      createdAt: { type: "datetime", required: true },
      messages: {
        type: "view",
        viewType: "relation",
        relation: {
          source: "queryConnection",
          model:
            "kjzl6hvfrbw6c9qzu96sd94o3yekw6fe6v9zr6mof7cieesmdyih16sbxpu9qsr",
          property: "roomId",
        },
      },
    },
    TartarusProfile: {
      friends: {
        type: "list",
        required: false,
        item: { type: "did", required: false },
      },
      createdAt: { type: "datetime", required: true },
      displayName: { type: "string", required: true },
      profilePictureCid: { type: "string", required: true },
      rooms: {
        type: "view",
        viewType: "relation",
        relation: {
          source: "queryConnection",
          model:
            "kjzl6hvfrbw6cah3f8dtbnge3b38xss2g5twhjtvi5zovfn51fvuhomxyhp1770",
          property: "TartarusProfileId",
        },
      },
    },
    Message: {
      roomId: { type: "streamid", required: true },
      message: { type: "string", required: true },
      editedAt: { type: "datetime", required: false },
      senderId: { type: "streamid", required: true },
      createdAt: { type: "datetime", required: true },
      room: {
        type: "view",
        viewType: "relation",
        relation: {
          source: "document",
          model:
            "kjzl6hvfrbw6cah3f8dtbnge3b38xss2g5twhjtvi5zovfn51fvuhomxyhp1770",
          property: "roomId",
        },
      },
      sender: {
        type: "view",
        viewType: "relation",
        relation: {
          source: "document",
          model:
            "kjzl6hvfrbw6c9pdj2lt4zen2gx33ztcwyhvu6ygb3x6537867blkez0fi8a4nc",
          property: "senderId",
        },
      },
    },
    PublicEncryptionDID: {
      PublicEncryptionDID: { type: "did", required: true },
      author: { type: "view", viewType: "documentAccount" },
    },
  },
  enums: {},
  accountData: {
    roomList: { type: "connection", name: "Room" },
    tartarusProfile: { type: "node", name: "TartarusProfile" },
    messageList: { type: "connection", name: "Message" },
    publicEncryptionDidList: {
      type: "connection",
      name: "PublicEncryptionDID",
    },
  },
};
