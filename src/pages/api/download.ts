import stream from "stream";
import fetch from "node-fetch";
import { promisify } from "util";
import { NextApiRequest, NextApiResponse } from "next";

const pipeline = promisify(stream.pipeline);

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const body = req.body;
  const { fileName, publicUrl }: PhotoType = JSON.parse(body);
  const response = await fetch(publicUrl); // replace this with your API call & options
  if (!response.ok)
    throw new Error(`unexpected response ${response.statusText}`);

  // res.setHeader("Content-Type", fileType);
  res.setHeader("Content-Disposition", `attachment; filename=${fileName}`);
  await pipeline(response.body!, res);
};

export default handler;
