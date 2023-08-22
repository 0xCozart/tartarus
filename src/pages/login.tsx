import { type BrowserProvider } from "ethers";
import {
  type Dispatch,
  type MouseEventHandler,
  type SetStateAction,
} from "react";
import { getEthWindowProvider } from "~/api/composedb/client";
import { MetamaskButton } from "~/components/buttons";
import Terminal from "~/components/terminal";

type LoginProps = {
  provider: BrowserProvider;
  setProvider: Dispatch<SetStateAction<BrowserProvider>>;
};

const Login = ({ provider, setProvider }: LoginProps) => {
  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();

    getEthWindowProvider()
      .then(({ provider, signer }) => {
        if (!signer) {
          throw Error("not authed");
        } else setProvider(provider);
      })
      .catch(console.error);
  };

  return !provider ? (
    <div className="">
      <MetamaskButton handleClick={handleClick}></MetamaskButton>
    </div>
  ) : (
    <Terminal />
  );
};

export default Login;
