import { EthereumWebAuth, getAccountId } from "@didtools/pkh-ethereum";

import { type ApolloClient, type NormalizedCacheObject } from "@apollo/client";
import { DIDSession } from "did-session";
import { type EthProvider } from "../apollo/client";

type NoUndefinedField<T> = {
  [P in keyof T]-?: Required<NonNullable<T[P]>>;
};

const setDid = async (
  { provider, signer }: NoUndefinedField<EthProvider>,
  composeClient: ApolloClient<NormalizedCacheObject>
) => {
  try {
    const address = await signer.getAddress();
    const accountId = await getAccountId(provider, address);
    const authMethod = await EthereumWebAuth.getAuthMethod(provider, accountId);
    const session = await DIDSession.get(accountId, authMethod, {
      resources: composeClient.resources,
    });

    composeClient.setDID(session.did);
  } catch (err) {
    console.error(err);
  }
};

export { setDid };
