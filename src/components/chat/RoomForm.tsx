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

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const roomInput: RoomInput = {
        key: formData.key,
        roomName: formData.roomName,
        createdAt: new Date().toISOString(), // Assuming current date-time
        tartarusProfileId: profileId,
      };

      // not sure why there are two nested 'content'(s) here
      await createRoom({ variables: { content: { content: roomInput } } });
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
    <div>
      <form>
        <div className="mb-6 grid gap-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="first_name"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              First name
            </label>
            <input
              type="text"
              id="first_name"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="John"
              required
            />
          </div>
          <div>
            <label
              htmlFor="last_name"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              Last name
            </label>
            <input
              type="text"
              id="last_name"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Doe"
              required
            />
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Email address
          </label>
          <input
            type="email"
            id="email"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="john.doe@company.com"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default RoomForm;
