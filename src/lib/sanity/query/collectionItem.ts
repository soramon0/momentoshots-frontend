import type { CollectionItem, Collection } from "../schemaTypes";
import { readClient } from "../client";

export async function getFeaturedCollectionItems() {
  return readClient.fetch<CollectionItem[]>(
    `*[_type == 'collection_item' && featured == true]`
  );
}

export type CollectionWithItems = Collection & {
  items?: CollectionItem[];
};

export async function getCollectionWithItems(slug: string) {
  const query = `*[_type == 'collection' && slug.current ==  $slug][0]{
    _id,
    name,
    description,
    main_image,
    items[] -> {
      _id,
      image
    }
  }`;

  return readClient.fetch<CollectionWithItems>(query, {
    slug,
  });
}
