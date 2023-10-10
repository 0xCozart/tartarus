import pinataSDK from "@pinata/sdk";
import fs from "fs";
import { type NextApiRequest, type NextApiResponse } from "next";
import { env } from "~/env.mjs";

const pinata = new pinataSDK({ pinataJWTKey: env.NEXT_PUBLIC_PINATA_JWT });

export const config = {
  api: {
    bodyParser: false,
  },
};

const saveFile = async (file: File) => {
  const buffer = Buffer.from(file.toString());
  const stream = fs.createReadStream(buffer);
  const cid = await pinata.pinFileToIPFS(stream);

  return cid;
};

type ResponseData = {
  cid?: string;
  message?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === "POST") {
    try {
      // if (err) {
      //   console.log({ err });
      //   return res.status(500).send("Upload Error");
      // }
      const response = await saveFile(req.body as File);
      const { IpfsHash } = response;

      return res.status(200).send({ cid: IpfsHash });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server Error" });
    }
  } else if (req.method === "GET") {
    try {
      const response = await pinata.pinList({
        pageLimit: 1,
      });
      res.json({ message: response.rows[0].ipfs_pin_hash });
    } catch (e) {
      console.log(e);
      res.status(500).send({ message: "Server Error" });
    }
  }
}
