import Terminal from "react-console-emulator";

type Props = {
  connectMetamask: () => void;
};

const ConnectTerminal = ({ connectMetamask }: Props) => {
  const commands = {
    connect: {
      description: "For your own safety use a burner ethereum account",
      usage: "connect to Tartarus",
      fn: () => {
        connectMetamask();
      },
    },
  };

  return <Terminal commands={commands} />;
};

export default ConnectTerminal;
