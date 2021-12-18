import type { FC } from "react";

import type { CollectionItem, Review } from "@/src/lib/sanity/schemaTypes";

export type HomePageProps = FC<{
  reviews: Review[];
  featuredItems: CollectionItem[];
}>;
