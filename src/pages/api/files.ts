import pinataSDK from "@pinata/sdk";
import * as formidable from "formidable";
import fs from "fs";
import { type NextApiRequest, type NextApiResponse } from "next";
import { env } from "../../env.mjs";

const pinata = new pinataSDK({ pinataJWTKey: env.NEXT_PUBLIC_PINATA_JWT });

export const config = {
  api: {
    bodyParser: false,
  },
};

type FileWithPath = File & {
  filepath: string;
};

const saveFile = async (file: FileWithPath, fileName: string) => {
  try {
    const stream = fs.createReadStream(file.filepath);
    const options = {
      pinataMetadata: {
        name: fileName,
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

      form.parse(req, function (err, fields, files) {
        console.log({ fields, files });
        if (err) {
          console.log("POST error: ", err);
          return res.status(500).send({ message: "Upload Error" });
        }
        if (files.file && fields.name?.[0]) {
          console.log({ files });
          saveFile(files.file[0] as unknown as FileWithPath, fields.name[0])
            .then((response) => {
              if (response)
                return res.status(200).send({ cid: response.IpfsHash });
              else
                return res.status(500).send({ message: "File saving failed" });
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
