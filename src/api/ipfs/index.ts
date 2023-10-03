import * as IPFS from "ipfs-core";

import fs from "fs";

const ipfs = await IPFS.create();

const buffer = fs.readFileSync(`${imagesDir}/${file}`);
const result = await ipfs.add(buffer);
console.log(result);
