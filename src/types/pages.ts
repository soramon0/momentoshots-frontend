import type { FC } from "react";

import type { CollectionWithItems } from "@/lib/sanity";
import type {
  Collection,
  CollectionItem,
  Review,
} from "@/lib/sanity/schemaTypes";

export type HomePageProps = FC<{
  reviews: Review[];
  featuredItems: CollectionItem[];
}>;

export type CollectionsPageProps = FC<{
  collections: Collection[];
}>;

export type CollectionPageProps = FC<{
  collection: CollectionWithItems;
  collectionPaths: CollectionPaths[];
}>;

export type CollectionPaths = {
  id: string;
  slug: string;
  name: string;
};
