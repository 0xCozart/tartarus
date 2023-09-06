"use client";

import { useMutation } from "@apollo/client";
import { useRef, useState } from "react";
import Terminal from "react-console-emulator";
import { CREATE_TARTARUSPROFILE } from "~/api/apollo/mutations";
import { type EthProvider } from "~/api/composedb/client";

const AuthTerminal = ({ provider, signer }: EthProvider) => {
  const terminal = useRef<unknown>();
  const [disable, setDisable] = useState(false);
  const [displayName, setDisplayName] = useState<string>();

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const [createProfile, { data, loading, error }] = useMutation(
    CREATE_TARTARUSPROFILE
  );

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
      fn: (username: string) => {
        void createProfile({ variables: { displayName: username } });
        return `${data}}`;
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
      errorText={"invalid command or input try again..."}
      noEchoBack={true}
      ref={terminal}
      commands={commands}
    />
  );
};

export default AuthTerminal;
