"use client";

import { type Dispatch, type SetStateAction } from "react";
import { getEthWindowProvider, type EthProvider } from "~/apollo/client";
import { LoginTerminal } from "~/components/terminals/";

type LoginProps = {
  setEthProvider: Dispatch<SetStateAction<EthProvider>>;
};

const Login = ({ setEthProvider }: LoginProps) => {
  const connectMetamask = () => {
    const provider = getEthWindowProvider();
    console.log({ provider });
    setEthProvider(provider);
  };

  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="border-gray background-animate to-rose-700 from-slate-500 block max-w-sm rounded-lg border bg-gradient-to-r via-indigo-600 bg-300% p-6 shadow">
          <p className="font-normal text-gray-700 dark:text-gray-400"></p>
          <LoginTerminal connectMetamask={connectMetamask} />
        </div>
      </main>
    </div>
  );
};

export default Login;
