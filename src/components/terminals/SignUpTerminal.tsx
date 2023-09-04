"use client";

// import Coquille, { type Commands } from "@algolia/coquille";
// import { useMutation } from "@apollo/client";
// import { DISPLAYNAME_MUTATION } from "~/api/apollo/mutations";
import Terminal from "react-console-emulator";
import { type EthProvider } from "~/api/composedb/client";

// const commands: Commands = {
//   signup: {
//     shortDesc: "enter a username for your time here in Tartarus...",
//     args: {
//       nbArgs: 1,
//     },
//     run: (name) => (
//       <p>
//         {(async () => {
//           // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
//           const [createDisplayName, { data, loading, error }] =
//             useMutation(DISPLAYNAME_MUTATION);

//           await createDisplayName({ variables: { displayName: name } });
//           return <p>{data || null}</p>;
//         })()}
//       </p>
//     ),
//   },
// };

const commands = {};

const SignUpTerminal = ({ provider, signer }: EthProvider) => {
  console.log({ provider, signer });
  // return <Coquille commands={commands}></Coquille>;
  return <Terminal commands={commands} />;
};

export default SignUpTerminal;
