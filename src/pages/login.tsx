import {
  type Dispatch,
  type MouseEventHandler,
  type SetStateAction,
} from "react";
import { getEthWindowProvider, type EthProvider } from "~/api/composedb/client";
import { MetamaskButton } from "~/components/buttons";

type LoginProps = {
  ethProvider: EthProvider | undefined;
  setEthProvider: Dispatch<SetStateAction<EthProvider>>;
};

const Login = ({ ethProvider, setEthProvider }: LoginProps) => {
  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();

    getEthWindowProvider()
      .then(({ provider, signer }) => {
        if (!signer) {
          throw Error("not authed");
        } else setEthProvider({ provider, signer });
      })
      .catch(console.error);
  };

  return !ethProvider ? (
    <div className="">
      <MetamaskButton handleClick={handleClick}></MetamaskButton>
    </div>
  ) : (
    <LandingTerminal />
  );
};

export default Login;
