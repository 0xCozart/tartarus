import { useMutation } from "@apollo/client";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { type RoomInput } from "~/__generated__/graphql";
import { CREATE_ROOM } from "~/api/apollo/mutations";

type FormType = {
  key: string;
  roomName: string;
  members: string[];
};

type RoomFormProps = {
  profileId: string;
};

const RoomForm = ({ profileId }: RoomFormProps) => {
  const [formData, setFormData] = useState<FormType>({
    key: "",
    roomName: "",
    members: [],
  });

  const [createRoom, { data, loading }] = useMutation(CREATE_ROOM);

  console.log({ data });
  const handleSubmit = async (event: FormEvent<HTMLButtonElement>) => {
    console.log("prevent default called");
    event.preventDefault();
    console.log("post prevent default call");
    try {
      const roomInput: RoomInput = {
        key: formData.key,
        roomName: formData.roomName,
        createdAt: new Date().toISOString(), // Assuming current date-time
        // memebers will be added
      };

      // not sure why there are two nested 'content'(s) here
      const room = await createRoom({
        variables: { content: { content: roomInput } },
      });
      console.log({ room });
      alert("Room created successfully!");
    } catch (err) {
      console.error("Error creating room:", err);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value: (typeof formData)[keyof typeof formData] =
      event?.currentTarget.value;
    if (event.currentTarget.id == "members") {
      setFormData({
        ...formData,
        [event.currentTarget.id]: [...formData.members, value],
      });
    } else {
      setFormData({ ...formData, [event.currentTarget.id]: value });
    }
  };

  return (
    <div className="relative flex h-full w-full flex-row content-around">
      <div className="align-content-start relative flex flex-col p-10">
        <div className="">Create a chat room...</div>
        <div className="h-min max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800">
          <form>
            <div className="mb-6 grid gap-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="roomName"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Room name
                </label>
                <input
                  type="text"
                  id="roomName"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  required
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="key"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Key
                </label>
                <input
                  type="text"
                  id="key"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  required
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mb-6">
              <label
                htmlFor="members"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Members
              </label>
              <input
                type="text"
                id="members"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                required
                onChange={handleChange}
              />
            </div>

            <button
              type="button"
              className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
              onClick={(event) => {
                console.log("clicked");
                void handleSubmit(event);
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RoomForm;
