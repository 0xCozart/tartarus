import {
  contentStylePrimary,
  inputTextStylePrimary,
  stylePrimary,
} from "~/styles/terminalStyles";

import Terminal from "react-console-emulator";

type Props = {
  connectMetamask: () => void;
};

const ConnectTerminal = ({ connectMetamask }: Props) => {
  const commands = {
    login: {
      description: "For your own safety use a burner ethereum account",
      usage: "connect to Tartarus",
      fn: () => {
        connectMetamask();
        return "connecting...";
      },
    },
  };

  return (
    <Terminal
      style={stylePrimary}
      inputTextStyle={inputTextStylePrimary}
      commands={commands}
      contentStyle={contentStylePrimary}
    />
  );
};

export default ConnectTerminal;
