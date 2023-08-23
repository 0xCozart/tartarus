import {
  type Dispatch,
  type MouseEventHandler,
  type SetStateAction,
} from "react";
import { getEthWindowProvider, type EthProvider } from "~/api/composedb/client";
import { MetamaskButton } from "~/components/buttons";
import LandingTerminal from "~/components/landingTerminal";

type LoginProps = {
  ethProvider: EthProvider | undefined;
  setEthProvider: Dispatch<SetStateAction<EthProvider | undefined>>;
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
    <LandingTerminal
      provider={ethProvider.provider}
      signer={ethProvider.signer}
    />
  );
};

export default Login;
