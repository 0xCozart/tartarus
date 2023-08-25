import {
  type Dispatch,
  type MouseEventHandler,
  type SetStateAction,
} from "react";
import { getEthWindowProvider, type EthProvider } from "~/api/composedb/client";
import { MetamaskButton } from "~/components/buttons";
import Terminal from "~/components/terminal";

type LoginProps = {
  ethProvider: EthProvider;
  setEthProvider: Dispatch<SetStateAction<EthProvider>>;
};

const Login = ({ ethProvider, setEthProvider }: LoginProps) => {
  const { provider, signer } = ethProvider;
  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();

    getEthWindowProvider()
      .then(({ provider, signer }) => {
        if (!signer) {
          throw Error("not authed");
        }
        if (provider) setEthProvider({ provider, signer });
      })
      .catch(console.error);
  };

  return !signer ? (
    <div className="content-center">
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
    <Terminal provider={provider} signer={signer} />
  );
};

export default Login;
