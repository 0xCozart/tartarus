"use client";

import { useRef, useState } from "react";
import Terminal from "react-console-emulator";
import { type EthProvider } from "~/api/composedb/client";

const AuthTerminal = ({ provider, signer }: EthProvider) => {
  const terminal = useRef<unknown>();
  const [disable, setDisable] = useState(false);

  const commands = {
    login: {
      description: "login command for authorizing Tartarus account",
      usage: "'login password'",
      fn: (password: string) => {
        if (password.length < 5) return "password is to short to be valid.";
        return `${password}`;
      },
    },
    signup: {
      description: "signup to Tartarus",
      usage: "'signup username password'",
      fn: (username: string, password: string) => {
        return `${username}, ${password}`;
      },
      hi: {
        description: "",
        usage: "",
        fn: () => {
          return "hello, welcome to Tartarus";
        },
      },
    },
  };

  // return <Coquille commands={commands}></Coquille>;
  return (
    <Terminal
      autoFocus={true}
      disabled={disable}
      disableOnProcess={true}
      errorText={"an error has occured, please refresh the page..."}
      noEchoBack={true}
      promptLabel={"$>"}
      ref={terminal}
      commands={commands}
    />
  );
};

export default AuthTerminal;
