import { type RuntimeCompositeDefinition } from "@composedb/types/dist";

// This is an auto-generated file, do not edit manually
export const definition: RuntimeCompositeDefinition = {
  models: {
    Room: {
      id: "kjzl6hvfrbw6cah3f8dtbnge3b38xss2g5twhjtvi5zovfn51fvuhomxyhp1770",
      accountRelation: { type: "list" },
    },
    TartarusProfile: {
      id: "kjzl6hvfrbw6c9pdj2lt4zen2gx33ztcwyhvu6ygb3x6537867blkez0fi8a4nc",
      accountRelation: { type: "single" },
    },
    Message: {
      id: "kjzl6hvfrbw6c9qzu96sd94o3yekw6fe6v9zr6mof7cieesmdyih16sbxpu9qsr",
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
      roomName: { type: "string", required: true, indexed: true },
      createdAt: { type: "datetime", required: true, indexed: true },
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
      createdAt: { type: "datetime", required: true, indexed: true },
      displayName: { type: "string", required: true, indexed: true },
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
      message: { type: "string", required: true, indexed: true },
      editedAt: { type: "datetime", required: false },
      senderId: { type: "streamid", required: true },
      createdAt: { type: "datetime", required: true, indexed: true },
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
  },
  enums: {},
  accountData: {
    roomList: { type: "connection", name: "Room" },
    tartarusProfile: { type: "node", name: "TartarusProfile" },
    messageList: { type: "connection", name: "Message" },
  },
};
