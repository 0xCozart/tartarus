import { type DAGCBOR } from "@helia/dag-cbor";

const uploadImageHelia = (
  helia: DAGCBOR,
  imageBuffer: Buffer
): string | null => {
  let cid: string | null = null;

  if (helia) {
    helia
      .add(imageBuffer.toJSON())
      .then((res) => {
        if (res) {
          console.log({ res });
          cid = res.toString();
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return cid;
};

export { uploadImageHelia };
