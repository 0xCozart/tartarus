import { CREATE_TARTARUSPROFILE } from "~/api/apollo/mutations";
import Terminal from "react-console-emulator";
import { useMutation } from "@apollo/client";

const SignUpTerminal = () => {
  const [createProfile, { data: tartarusData }] = useMutation(
    CREATE_TARTARUSPROFILE
  );

  const commands = {
    signup: {
      description: "signup to Tartarus",
      usage: "signup <username>",
      fn: (username: string) => {
        void createProfile({
          variables: { i: { content: { displayName: username } } },
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
