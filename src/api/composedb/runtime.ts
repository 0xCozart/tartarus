import { type RuntimeCompositeDefinition } from "@composedb/types/dist";

// This is an auto-generated file, do not edit manually
export const definition: RuntimeCompositeDefinition = {
  models: {
    Room: {
      id: "kjzl6hvfrbw6cah3f8dtbnge3b38xss2g5twhjtvi5zovfn51fvuhomxyhp1770",
      accountRelation: { type: "list" },
    },
    Message: {
      id: "kjzl6hvfrbw6c9h5f5daav02v7pl8ulwbfnkkbq1yn2cv5yqusjclztq3xwfz5j",
      accountRelation: { type: "list" },
    },
    TartarusProfile: {
      id: "kjzl6hvfrbw6c9pdj2lt4zen2gx33ztcwyhvu6ygb3x6537867blkez0fi8a4nc",
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
      },
      roomName: { type: "string", required: true, indexed: true },
      createdAt: { type: "datetime", required: true, indexed: true },
      messages: {
        type: "view",
        viewType: "relation",
        relation: {
          source: "queryConnection",
          model:
            "kjzl6hvfrbw6c9h5f5daav02v7pl8ulwbfnkkbq1yn2cv5yqusjclztq3xwfz5j",
          property: "roomId",
        },
      },
    },
    Message: {
      roomId: { type: "streamid", required: true, indexed: true },
      sender: { type: "did", required: true, indexed: true },
      message: { type: "string", required: false, indexed: true },
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
  },
  enums: {},
  accountData: {
    roomList: { type: "connection", name: "Room" },
    messageList: { type: "connection", name: "Message" },
    tartarusProfile: { type: "node", name: "TartarusProfile" },
  },
};
