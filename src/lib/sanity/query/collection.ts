import type { Collection } from "../schemaTypes";
import { readClient } from "../client";

export async function getCollections() {
  return readClient.fetch<Collection[]>(`*[_type == 'collection']`);
}

const latestCollectionSlugsQuery = `
  *[_type == 'collection'] | order(_createdAt desc)[0..2] {
    _id,
    name,
    slug,
  }
`;

export async function getLatestCollectionSlugs() {
  return readClient.fetch<Collection[]>(latestCollectionSlugsQuery);
}
