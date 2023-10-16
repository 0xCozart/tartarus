import { useQuery } from "@apollo/client";
import Image from "next/image";
import {
  useRef,
  type ChangeEventHandler,
  type Dispatch,
  type SetStateAction,
} from "react";
import { type TartarusProfile } from "~/__generated__/graphql";
import { GET_VIEWER_ROOMS_W_MEMBERS_MESSAGES } from "~/api/apollo/querys";

type MainChatProps = {
  tartarusProfile: TartarusProfile;
  setFile: Dispatch<SetStateAction<File | undefined>>;
};

function MainChat({ tartarusProfile, setFile }: MainChatProps) {
  const imageUploadRef = useRef<HTMLInputElement>(null);
  const { displayName } = tartarusProfile;

  //
  const roomsQuery = useQuery(GET_VIEWER_ROOMS_W_MEMBERS_MESSAGES);
  const { viewer } = roomsQuery.data ? roomsQuery.data : { viewer: null };

  console.log({ roomsQuery: viewer?.roomList?.edges });

  // this file upload should be turned into a hook or something idk (will be moved)
  const handleFileInputClick = () => {
    if (imageUploadRef.current) imageUploadRef.current.click();
  };

  const handleFileInputChange: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    event.preventDefault();
    if (event.target.files?.[0]) {
      setFile(event.target.files[0]);
    }
  };

  return (
    <div className="mb-0 flex text-gray-800 antialiased">
      <div className="flex h-full w-full flex-row overflow-x-hidden">
        {/* Sidebar starts*/}
        <div className="flex w-64 flex-shrink-0 flex-col bg-white py-8 pl-6 pr-2">
          <div className="flex h-12 w-full flex-row items-center justify-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-700">
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
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                ></path>
              </svg>
            </div>
            <div className="ml-2 text-2xl font-bold">Tartarus</div>
          </div>
          {/* Profile card starts (might make this a seperate component) */}
          <div className="mt-4 flex w-full flex-col items-center rounded-lg border border-gray-200 bg-indigo-100 px-4 py-6">
            <div className="h-20 w-20 overflow-hidden rounded-full border">
              <Image
                width={10}
                height={10}
                src=""
                alt="Avatar"
                className="h-full w-full"
              />
            </div>
            <div className="mt-2 text-sm font-semibold">Aminos Co.</div>
            <div className="text-xs text-gray-500">Lead UI/UX Designer</div>
            <div className="mt-3 flex flex-row items-center">
              <div className="flex h-4 w-8 flex-col justify-center rounded-full bg-indigo-500">
                <div className="mr-1 h-3 w-3 self-end rounded-full bg-white"></div>
              </div>
              <div className="ml-1 text-xs leading-none">Active</div>
            </div>
          </div>
          {/* Profile card ends */}
          {/* Room section starts */}
          {/* create a loading animation while rooms are loading */}
          <div className="mt-8 flex flex-col">
            {/* Room title start */}
            <div className="flex flex-row items-center justify-between text-xs">
              <span className="font-bold">Rooms</span>
              {/* Room number*/}
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-gray-300"></span>
            </div>
            {/* Room title ends */}
            {/* Room list start */}
            <div className="h-100 -mx-2 mt-4 flex flex-col space-y-1 overflow-y-auto">
              {/* eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing*/}
              {viewer?.roomList?.edges || !roomsQuery.loading ? (
                viewer?.roomList?.edges?.map((room) => (
                  <button
                    className="flex flex-row items-center rounded-xl p-2 hover:bg-gray-100"
                    key={room?.node?.roomName}
                  >
                    {/* can turn this into a room image */}
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-200">
                      {room?.node?.roomName[0]?.toUpperCase()}
                    </div>
                    <div className="ml-2 text-sm font-semibold">
                      {room?.node?.roomName}
                    </div>
                  </button>
                ))
              ) : (
                <div role="status">
                  <svg
                    aria-hidden="true"
                    className="mr-2 h-8 w-8 animate-spin fill-blue-600 text-gray-200 dark:text-gray-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span className="sr-only">Loading...</span>
                </div>
              )}
            </div>
            {/* Room list ends */}
            {/* Seperate section starts (will asign us to it later perhaps) */}
            {/* <div className="mt-6 flex flex-row items-center justify-between text-xs">
              <span className="font-bold">Archivied</span>
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-gray-300">
                7
              </span>
            </div>
            <div className="-mx-2 mt-4 flex flex-col space-y-1">
              <button className="flex flex-row items-center rounded-xl p-2 hover:bg-gray-100">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-200">
                  H
                </div>
                <div className="ml-2 text-sm font-semibold">Henry Boyd</div>
              </button>
            </div> */}
            {/* Seperate section ends */}
          </div>
          {/* Room section ends */}
        </div>
        {/* Sidebar ends*/}
        {/* Chat starts */}
        <div className="flex h-full flex-auto flex-col p-6">
          <div className="flex h-full flex-auto flex-shrink-0 flex-col rounded-2xl bg-gray-100 p-4">
            <div className="mb-4 flex h-full flex-col overflow-x-auto">
              <div className="flex h-full flex-col">
                <div className="grid grid-cols-12 gap-y-2">
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
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Vel ipsa commodi illum saepe numquam maxime
                          asperiores voluptate sit, minima perspiciatis.
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
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Perspiciatis, in.
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
              </div>
            </div>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainChat;
