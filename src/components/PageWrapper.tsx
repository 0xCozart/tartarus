import { type Dispatch, type ReactNode, type SetStateAction } from "react";
import { type ActiveTabRoutes } from "~/pages";

type PageWrapperProps = {
  displayName: string;
  profilePictureUri: string;
  children: ReactNode;
  setActiveTab: Dispatch<SetStateAction<ActiveTabRoutes>>;
};

const PageWrapper = ({
  displayName,
  profilePictureUri,
  setActiveTab,
  children,
}: PageWrapperProps) => {
  const handleNavClick = (route: ActiveTabRoutes) => setActiveTab(route);

  return (
    <div className="relative flex h-screen w-full overflow-hidden bg-white">
      {/* Topbar starts */}
      <aside className="relative flex h-full w-16 flex-col items-center justify-center space-y-10 bg-gray-800 text-white">
        <div
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg hover:bg-white hover:text-gray-800  hover:duration-300 hover:ease-linear focus:bg-white"
          onClick={(event) => {
            event.preventDefault();
            handleNavClick("chat");
          }}
        >
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
        <div
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg hover:bg-white hover:text-gray-800  hover:duration-300 hover:ease-linear focus:bg-white"
          onClick={(event) => {
            event.preventDefault();
            handleNavClick("createRoom");
          }}
        >
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
              d="M4 10l8-5 8 5v7l-8 5-8-5v-7z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 10l8 5 8-5M4 10l8-5 8 5"
            />
          </svg>
        </div>
        <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg hover:bg-white hover:text-gray-800  hover:duration-300 hover:ease-linear focus:bg-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg hover:bg-white hover:text-gray-800  hover:duration-300 hover:ease-linear focus:bg-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>
      </aside>
      <div className="flex h-full w-full flex-col justify-between">
        <header className="relative flex h-16 w-full items-center justify-end space-x-10 bg-gray-800 px-5">
          <div className="flex flex-shrink-0 items-center space-x-2 text-white">
            <div className="text-md font-medium">{displayName}</div>
            <div
              className="h-10 w-10 cursor-pointer rounded-full "
              style={{
                backgroundImage: `url("${profilePictureUri}")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </div>
        </header>
        <main className="relative flex h-full max-w-full overflow-y-hidden">
          {children}
        </main>
      </div>
    </div>
  );
};

export default PageWrapper;
