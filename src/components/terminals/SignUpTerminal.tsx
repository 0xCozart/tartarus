import Coquille, { type Commands } from "@algolia/coquille";
import { type EthProvider } from "~/api/composedb/client";

const commands: Commands = {
  signup: {
    shortDesc: "enter a username for your time here in Tartarus...",
    args: {
      nbArgs: 1,
    },
    run: (name) => <p>{}</p>,
  },
};

const SignUpTerminal = ({ provider, signer }: EthProvider) => {
  console.log({ provider, signer });
  return <Coquille></Coquille>;
};

export default SignUpTerminal;
