"use client";

import { useRef } from "react";
import Terminal from "react-console-emulator";
import { type EthProvider } from "~/api/composedb/client";

const AuthTerminal = ({ provider, signer }: EthProvider) => {
  const terminal = useRef<unknown>();
  const commands = {
    login: {
      description: "enter password:",
      fn: (password: string) => {
        if (password.length < 5) return "password is to short to be valid.";
        return "nice";
      },
    },
    signUp: {
      description: "enter a username...",
      fn: () => {
        return "xd";
      },
    },
  };

  // return <Coquille commands={commands}></Coquille>;
  return <Terminal ref={terminal} commands={commands} />;
};

export default AuthTerminal;
