"use client";

import { type Dispatch, type SetStateAction } from "react";
import { getEthWindowProvider, type EthProvider } from "~/api/apollo/client";
import { LoginTerminal } from "~/components/terminals/";

type LoginProps = {
  setEthProvider: Dispatch<SetStateAction<EthProvider>>;
};

const Login = ({ setEthProvider }: LoginProps) => {
  const connectMetamask = () => {
    const provider = getEthWindowProvider();
    setEthProvider(provider);
  };

  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <a
          href="#"
          className="block max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <p className="font-normal text-gray-700 dark:text-gray-400">
            <LoginTerminal connectMetamask={connectMetamask} />
          </p>
        </a>
      </main>
    </div>
  );
};

export default Login;
