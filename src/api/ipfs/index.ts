import { type IPFS } from "ipfs-core-types";

const uploadImageIpfs = (ipfs: IPFS, imageBuffer: Buffer): string | null => {
  let cid = null;

  if (ipfs) {
    ipfs
      .add(imageBuffer)
      .then((res) => {
        if (res.cid) {
          cid = res.cid;
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return cid;
};

export { uploadImageIpfs };
