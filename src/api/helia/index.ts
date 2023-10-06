import { type DAGCBOR } from "@helia/dag-cbor";

const uploadImageHelia = async (
  helia: DAGCBOR,
  imageBuffer: Buffer
): Promise<string | null | undefined> => {
  let cid: string | null | undefined = null;

  if (helia) cid = (await helia.add(imageBuffer.toJSON())).toString();

  console.log({ cid });
  return cid;
};

export { uploadImageHelia };
