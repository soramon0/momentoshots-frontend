import { getLatestCollectionSlugs } from "@/lib/sanity";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") return;

  try {
    const data = await getLatestCollectionSlugs();
    return res.json(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: ["something unexpected happened"] });
  }
}
