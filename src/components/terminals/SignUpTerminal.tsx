import { type Dispatch, type SetStateAction } from "react";
import Terminal from "react-console-emulator";
import { type CreateTartarusProfileInput } from "~/__generated__/graphql";

const SignUpTerminal = ({
  setMutationData,
}: {
  setMutationData: Dispatch<
    SetStateAction<CreateTartarusProfileInput | undefined>
  >;
}) => {
  const commands = {
    signup: {
      description: "signup to Tartarus",
      usage: "signup <username>",
      fn: (username: string) => {
        setMutationData({
          content: {
            displayName: username,
            createdAt: new Date().toISOString(),
            profilePicture: "test URI",
          },
        });
      },
    },
  };

  return (
    <Terminal
      autoFocus={true}
      disableOnProcess={true}
      errorText={"invalid command or input try again..."}
      noEchoBack={true}
      commands={commands}
    />
  );
};

export default SignUpTerminal;
