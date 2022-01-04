import type { NextApiRequest, NextApiResponse } from "next";

import { createContact } from "@/lib/sanity";
import { validateContact } from "@/lib/validation";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") return;

  const { data, errors } = await validateContact(req.body);

  if (!data || errors) {
    return res.status(400).json(errors);
  }

  try {
    const contact = await createContact(data);
    return res.json(contact);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: ["something unexpected happened"] });
  }
}
