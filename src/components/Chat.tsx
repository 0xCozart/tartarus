import {
  type Message,
  type Room,
  type TartarusProfile,
} from "~/__generated__/graphql";

type ChatProps = {
  room: Room;
  messages: Message[];
  profileData: TartarusProfile;
};

const Chat = ({ room, messages, profileData }: ChatProps) => {
  // bring in messages accoring to the room selected
  // filter through messages so that the first 50 appear (need to learn how cursor works)
  // render properly through
  return (
    <div className="flex h-full flex-auto flex-col p-6">
      <div className="flex h-full flex-auto flex-shrink-0 flex-col rounded-2xl bg-gray-100 p-4">
        <div className="mb-4 flex h-full flex-col overflow-x-auto">
          <div className="flex h-full flex-col">
            <div className="grid grid-cols-12 gap-y-2">
              {/* Messages ui start */}
              <div className="col-start-1 col-end-8 rounded-lg p-3">
                <div className="flex flex-row items-center">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-500">
                    A
                  </div>
                  <div className="relative ml-3 rounded-xl bg-white px-4 py-2 text-sm shadow">
                    <div>Hey How are you today?</div>
                  </div>
                </div>
              </div>
              <div className="col-start-1 col-end-8 rounded-lg p-3">
                <div className="flex flex-row items-center">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-500">
                    A
                  </div>
                  <div className="relative ml-3 rounded-xl bg-white px-4 py-2 text-sm shadow">
                    <div>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Vel ipsa commodi illum saepe numquam maxime asperiores
                      voluptate sit, minima perspiciatis.
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-start-6 col-end-13 rounded-lg p-3">
                <div className="flex flex-row-reverse items-center justify-start">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-500">
                    A
                  </div>
                  <div className="relative mr-3 rounded-xl bg-indigo-100 px-4 py-2 text-sm shadow">
                    <div>Im ok what about you?</div>
                  </div>
                </div>
              </div>
              <div className="col-start-6 col-end-13 rounded-lg p-3">
                <div className="flex flex-row-reverse items-center justify-start">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-500">
                    A
                  </div>
                  <div className="relative mr-3 rounded-xl bg-indigo-100 px-4 py-2 text-sm shadow">
                    <div>
                      Lorem ipsum dolor sit, amet consectetur adipisicing. ?
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-start-1 col-end-8 rounded-lg p-3">
                <div className="flex flex-row items-center">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-500">
                    A
                  </div>
                  <div className="relative ml-3 rounded-xl bg-white px-4 py-2 text-sm shadow">
                    <div>Lorem ipsum dolor sit amet !</div>
                  </div>
                </div>
              </div>
              <div className="col-start-6 col-end-13 rounded-lg p-3">
                <div className="flex flex-row-reverse items-center justify-start">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-500">
                    A
                  </div>
                  <div className="relative mr-3 rounded-xl bg-indigo-100 px-4 py-2 text-sm shadow">
                    <div>
                      Lorem ipsum dolor sit, amet consectetur adipisicing. ?
                    </div>
                    <div className="absolute bottom-0 right-0 -mb-5 mr-2 text-xs text-gray-500">
                      Seen
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-start-1 col-end-8 rounded-lg p-3">
                <div className="flex flex-row items-center">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-500">
                    A
                  </div>
                  <div className="relative ml-3 rounded-xl bg-white px-4 py-2 text-sm shadow">
                    <div>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Perspiciatis, in.
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-start-1 col-end-8 rounded-lg p-3">
                <div className="flex flex-row items-center">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-500">
                    A
                  </div>
                  <div className="relative ml-3 rounded-xl bg-white px-4 py-2 text-sm shadow">
                    <div className="flex flex-row items-center">
                      <button className="flex h-8 w-10 items-center justify-center rounded-full bg-indigo-600 hover:bg-indigo-800">
                        <svg
                          className="h-6 w-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                          ></path>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Messages ui ends */}
          </div>
        </div>
        {/* chat input starts */}
        <div className="flex h-16 w-full flex-row items-center rounded-xl bg-white px-4">
          <div>
            <input
              type="file"
              ref={imageUploadRef}
              onChange={(event) => handleFileInputChange(event)}
              style={{ display: "none" }}
            />
            <button
              name="profile picture upload"
              className="flex items-center justify-center text-gray-400 hover:text-gray-600"
              onClick={handleFileInputClick}
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                ></path>
              </svg>
            </button>
          </div>
          <div className="ml-4 flex-grow">
            <div className="relative w-full">
              <input
                type="text"
                className="flex h-10 w-full rounded-xl border pl-4 focus:border-indigo-300 focus:outline-none"
              />
              <button className="absolute right-0 top-0 flex h-full w-12 items-center justify-center text-gray-400 hover:text-gray-600">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="ml-4">
            <button className="flex flex-shrink-0 items-center justify-center rounded-xl bg-indigo-500 px-4 py-1 text-white hover:bg-indigo-600">
              <span>Send</span>
              <span className="ml-2">
                <svg
                  className="-mt-px h-4 w-4 rotate-45 transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  ></path>
                </svg>
              </span>
            </button>
          </div>
        </div>
        {/* chat input ends */}
      </div>
    </div>
  );
};

export default Chat;
