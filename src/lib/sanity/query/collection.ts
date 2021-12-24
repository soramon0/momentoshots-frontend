import type { Collection } from "../schemaTypes";
import { readClient } from "../client";

export async function getCollections() {
  return readClient.fetch<Collection[]>(`*[_type == 'collection']`);
}
