import type { FC } from "react";

import type {
  Collection,
  CollectionItem,
  Review,
} from "@/src/lib/sanity/schemaTypes";

export type HomePageProps = FC<{
  reviews: Review[];
  featuredItems: CollectionItem[];
}>;

export type CollectionsPageProps = FC<{
  collections: Collection[];
}>;
