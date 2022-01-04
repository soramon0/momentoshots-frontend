import { createClient } from "next-sanity";

import { getSanityDataset, getSanityProjectId, getSanityToken } from "@/lib";

export const readClient = createClient({
  projectId: getSanityProjectId(),
  dataset: getSanityDataset(),
  useCdn: process.env.NODE_ENV === "production",
  apiVersion: "2021-12-18",
});

export const writeClient = createClient({
  projectId: getSanityProjectId(),
  dataset: getSanityDataset(),
  useCdn: false,
  apiVersion: "2021-12-18",
  token: getSanityToken(),
});
