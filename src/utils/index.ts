import { env } from "~/env.mjs";

const imageUriFromCid = (cid: string) => {
  return `https://${env.NEXT_PUBLIC_PINATA_GATEWAY}/ipfs/${cid}`;
};

export { imageUriFromCid };
