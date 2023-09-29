"use client";

import Image from "next/image";
import { type EthProvider } from "~/api/apollo/client";

function HomeChat(ethProvider: EthProvider) {
  console.log("this is the chat component", { ethProvider });
  return (
    <div>
      <div className="container mx-auto rounded-lg shadow-lg">
        {/* headaer */}
        <div className="flex items-center justify-between border-b-2 bg-white px-5 py-5">
          <div className="text-2xl font-semibold">GoingChat</div>
          <div className="w-1/2">
            <input
              type="text"
              name=""
              id=""
              placeholder="search IRL"
              className="w-full rounded-2xl bg-gray-100 px-5 py-3"
            />
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500 p-2 font-semibold text-white">
            RA
          </div>
        </div>
        {/* end header */} {/* Chatting */}
        <div className="flex flex-row justify-between bg-white">
          {/* chat list */}
          <div className="scrollbar-thin scrollbar-thumb-gray-300 flex w-2/5 flex-col overflow-y-auto border-r-2">
            {/* search component */}
            <div className="border-b-2 px-2 py-4">
              <input
                type="text"
                placeholder="search chatting"
                className="w-full rounded-2xl border-2 border-gray-200 px-2 py-2"
              />
            </div>
            {/* end search compt */} {/* user list */}
            <div className="flex flex-row items-center justify-center border-b-2 px-2 py-4">
              <div className="flex flex-row items-center border-b-2 px-2 py-4">
                <div className="w-1/4">
                  <Image
                    width={20}
                    height={20}
                    src="https://source.unsplash.com/otT2199XwI8/600x600"
                    className="h-12 w-12 rounded-full object-cover"
                    alt=""
                  />
                </div>
                <div className="w-full">
                  <div className="text-lg font-semibold">Everest Trip 2021</div>
                  <span className="text-gray-500">Hi Sam, Welcome</span>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center border-b-2 px-2 py-4">
              <div className="w-1/4">
                <Image
                  width={20}
                  height={20}
                  src="https://source.unsplash.com/otT2199XwI8/600x600"
                  className="h-12 w-12 rounded-full object-cover"
                  alt=""
                />
              </div>
              <div className="w-full">
                <div className="text-lg font-semibold">Everest Trip 2021</div>
                <span className="text-gray-500">Hi Sam, Welcome</span>
              </div>
            </div>
            <div className="flex flex-row items-center border-b-2 border-l-4 border-blue-400 px-2 py-4">
              <div className="w-1/4">
                <Image
                  width={20}
                  height={20}
                  src="https://source.unsplash.com/L2cxSuKWbpo/600x600"
                  className="h-12 w-12 rounded-full object-cover"
                  alt=""
                />
              </div>
              <div className="w-full">
                <div className="text-lg font-semibold">MERN Stack</div>
                <span className="text-gray-500">Lusi : Thanks Everyone</span>
              </div>
            </div>
            <div className="flex flex-row items-center border-b-2 px-2 py-4">
              <div className="w-1/4">
                <Image
                  width={20}
                  height={20}
                  src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                  className="h-12 w-12 rounded-full object-cover"
                  alt=""
                />
              </div>
              <div className="w-full">
                <div className="text-lg font-semibold">
                  Javascript Indonesia
                </div>
                <span className="text-gray-500">
                  Evan : some one can fix this
                </span>
              </div>
            </div>
            <div className="flex flex-row items-center border-b-2 px-2 py-4">
              <div className="w-1/4">
                <Image
                  width={20}
                  height={20}
                  src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                  className="h-12 w-12 rounded-full object-cover"
                  alt=""
                />
              </div>
              <div className="w-full">
                <div className="text-lg font-semibold">
                  Javascript Indonesia
                </div>
                <span className="text-gray-500">
                  Evan : some one can fix this
                </span>
              </div>
            </div>
            <div className="flex flex-row items-center border-b-2 px-2 py-4">
              <div className="w-1/4">
                <Image
                  width={20}
                  height={20}
                  src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                  className="h-12 w-12 rounded-full object-cover"
                  alt=""
                />
              </div>
              <div className="w-full">
                <div className="text-lg font-semibold">
                  Javascript Indonesia
                </div>
                <span className="text-gray-500">
                  Evan : some one can fix this
                </span>
              </div>
            </div>
            {/* end user list */}
          </div>
          {/* end chat list */} {/* message */}
          <div className="flex w-full flex-col justify-between px-5">
            <div className="mt-5 flex flex-col">
              <div className="mb-4 flex justify-end">
                <div className="mr-2 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl bg-blue-400 px-4 py-3 text-white">
                  Welcome to group everyone !
                </div>
                <Image
                  width={20}
                  height={20}
                  src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                  className="h-8 w-8 rounded-full object-cover"
                  alt=""
                />
              </div>
              <div className="mb-4 flex justify-start">
                <Image
                  width={20}
                  height={20}
                  src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                  className="h-8 w-8 rounded-full object-cover"
                  alt=""
                />
                <div className="ml-2 rounded-br-3xl rounded-tl-xl rounded-tr-3xl bg-gray-400 px-4 py-3 text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quaerat at praesentium, aut ullam delectus odio error sit rem.
                  Architecto nulla doloribus laborum illo rem enim dolor odio
                  saepe, consequatur quas?
                </div>
              </div>
              <div className="mb-4 flex justify-end">
                <div>
                  <div className="mr-2 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl bg-blue-400 px-4 py-3 text-white">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Magnam, repudiandae.
                  </div>

                  <div className="mr-2 mt-4 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl bg-blue-400 px-4 py-3 text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Debitis, reiciendis!
                  </div>
                </div>
                <Image
                  width={20}
                  height={20}
                  src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                  className="h-8 w-8 rounded-full object-cover"
                  alt=""
                />
              </div>
              <div className="mb-4 flex justify-start">
                <Image
                  width={20}
                  height={20}
                  src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                  className="h-8 w-8 rounded-full object-cover"
                  alt=""
                />
                <div className="ml-2 rounded-br-3xl rounded-tl-xl rounded-tr-3xl bg-gray-400 px-4 py-3 text-white">
                  happy holiday guys!
                </div>
              </div>
            </div>
            <div className="py-5">
              <input
                className="w-full rounded-xl bg-gray-300 px-3 py-5"
                type="text"
                placeholder="type your message here..."
              />
            </div>
          </div>
          {/* end message */}
          <div className="w-2/5 border-l-2 px-5">
            <div className="flex flex-col">
              <div className="py-4 text-xl font-semibold">Mern Stack Group</div>
              <Image
                width={20}
                height={20}
                src="https://source.unsplash.com/L2cxSuKWbpo/600x600"
                className="h-64 rounded-xl object-cover"
                alt=""
              />
              <div className="py-4 font-semibold">Created 22 Sep 2021</div>
              <div className="font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt, perspiciatis!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className="container mx-auto my-4 rounded-lg bg-gray-100 p-4">
    //   <div className="mb-4">
    //     <div className="flex items-end">
    //       <div className="max-w-xs rounded-l-lg bg-blue-500 px-3 py-2 text-white">
    //         Hello!
    //       </div>
    //       <div className="ml-2 flex-shrink-0">You • 12:34 PM</div>
    //     </div>
    //   </div>
    //   <div className="flex items-center">
    //     <input
    //       type="text"
    //       className="flex-1 rounded-full border border-gray-300 bg-white px-3 py-2 focus:outline-none"
    //       placeholder="Type a message..."
    //     />
    //     <button className="ml-2 rounded-full bg-blue-500 px-4 py-2 text-white">
    //       Send
    //     </button>
    //   </div>
    // </div>
  );
}

export default HomeChat;
