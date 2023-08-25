import { type EthProvider } from "~/api/composedb/client";

const Terminal = ({ provider, signer }: EthProvider) => {
  console.log({ provider, signer });
  return <div></div>;
};

export default Terminal;
