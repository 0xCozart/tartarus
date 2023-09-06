"use client";

import Link from "next/link";
import {
  useState,
  type Dispatch,
  type MouseEventHandler,
  type SetStateAction,
} from "react";
import { getEthWindowProvider, type EthProvider } from "~/api/composedb/client";
import { MetamaskButton } from "~/components/buttons";
import AuthTerminal from "~/components/terminals/AuthTerminal";

type LoginProps = {
  ethProvider: EthProvider;
  setEthProvider: Dispatch<SetStateAction<EthProvider>>;
};

const Login = ({ ethProvider, setEthProvider }: LoginProps) => {
  const { provider, signer } = ethProvider;
  const [hasAccount, setHasAccount] = useState(false);
  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();

    const provider = getEthWindowProvider();
    setEthProvider(provider);
  };

  if (hasAccount) return <Link href={"/"} />;

  return !signer && hasAccount ? (
    <div className="flex h-screen items-center justify-center ">
      <div className="max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <MetamaskButton handleClick={handleClick}></MetamaskButton>
      </div>
    </div>
  ) : (
    // DELETE THIS AND REFACTOR SO THAT THIS IS JUST AUTH PAGE THEN REDIRECTS TO SIGNUP PAGE IF NO PROFILE FOUND FOR USER DID
    <AuthTerminal provider={provider} signer={signer} />
  );
};

export default Login;
