"use client";

import { useMutation } from "@apollo/client";
import { useState } from "react";
import Terminal from "react-console-emulator";
import { type EthProvider } from "~/api/apollo/client";
import { CREATE_TARTARUSPROFILE } from "~/api/apollo/mutations";

const SignUpTerminal = ({ provider, signer }: EthProvider) => {
  const [disable, setDisable] = useState(false);
  const [displayName, setDisplayName] = useState<string>();

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const [createProfile, { data, loading, error }] = useMutation(
    CREATE_TARTARUSPROFILE
  );

  const commands = {
    signup: {
      description: "signup to Tartarus",
      usage: "signup <username>",
      fn: (username: string) => {
        void createProfile({ variables: { displayName: username } });
        return `${data}}`;
      },
    },
  };

  return (
    <Terminal
      autoFocus={true}
      disabled={disable}
      disableOnProcess={true}
      errorText={"invalid command or input try again..."}
      noEchoBack={true}
      commands={commands}
    />
  );
};

export default SignUpTerminal;
