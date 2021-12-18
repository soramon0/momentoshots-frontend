import { createClient } from "next-sanity";

import { getSanityDataset, getSanityProjectId } from "@/src/lib";

const sanityClient = createClient({
  projectId: getSanityProjectId(),
  dataset: getSanityDataset(),
  useCdn: process.env.NODE_ENV === "production",
  apiVersion: "2021-12-18",
});

export default sanityClient;
