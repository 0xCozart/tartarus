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
      <LoginTerminal connectMetamask={connectMetamask} />
    </div>
  );
};

export default Login;
