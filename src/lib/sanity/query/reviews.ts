import type { Review } from "../schemaTypes";
import { readClient } from "../client";

export async function getReviews() {
  return readClient.fetch<Review[]>(`*[_type == 'review']`);
}
