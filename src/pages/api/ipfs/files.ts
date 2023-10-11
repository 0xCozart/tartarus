import pinataSDK from "@pinata/sdk";
import * as formidable from "formidable";
import fs from "fs";
import { type NextApiRequest, type NextApiResponse } from "next";
import { env } from "../../../env.mjs";

const pinata = new pinataSDK({ pinataJWTKey: env.NEXT_PUBLIC_PINATA_JWT });

export const config = {
  api: {
    bodyParser: false,
  },
};

type FileWithPath = File & {
  filepath: string;
};

const saveFile = async (file: FileWithPath, fields: { name: string }) => {
  try {
    const stream = fs.createReadStream(file.filepath);
    const options = {
      pinataMetadata: {
        name: fields.name,
      },
    };
    const response = await pinata.pinFileToIPFS(stream, options);
    fs.unlinkSync(file.filepath);
    return response;
  } catch (err) {
    console.error(err);
  }
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
      const form = new formidable.IncomingForm();
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call

      form.parse(req, function (err, fields, files) {
        if (err) {
          console.log(err);
          return res.status(500).send({ message: "Upload Error" });
        }
        if (files.file) {
          console.log({ files });
          saveFile(files.file[0] as unknown as FileWithPath, fields)
            .then((response) => {
              if (response)
                return res.status(200).send({ cid: response.IpfsHash });
            })
            .catch(console.error);
        }
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server Error" });
    }
  } else if (req.method === "GET") {
    try {
      const response = await pinata.pinList({
        pageLimit: 1,
      });
      if (response.rows[0])
        res.json({ message: response.rows[0].ipfs_pin_hash });
    } catch (e) {
      console.log(e);
      res.status(500).send({ message: "Server Error" });
    }
  }
}
