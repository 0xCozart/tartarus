// This is an auto-generated file, do not edit manually
export const definition = {
  models: {
    Message: {
      id: "kjzl6hvfrbw6c7m9jvlhtecmwdehyju1d4ia9k2qg6mk61o44sg3i6oaq5wjiu0",
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
      sender: { type: "string", required: true },
      message: { type: "string", required: false },
      recipient: { type: "string", required: true },
      dateTimeCreated: { type: "datetime", required: true },
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
    TartarusProfile: {
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
  },
  enums: {},
  accountData: {
    messageList: { type: "connection", name: "Message" },
    roomList: { type: "connection", name: "Room" },
    tartarusProfile: { type: "node", name: "TartarusProfile" },
  },
};
