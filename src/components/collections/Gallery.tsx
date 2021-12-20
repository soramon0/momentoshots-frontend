import type { VFC } from "react";

import type { CollectionItem } from "@/src/lib/sanity/schemaTypes";
import { classNames } from "@/src/lib";
import SanityImage from "@/src/components/shared/SanityImage";

interface Props {
  items: CollectionItem[];
  collectionName: string;
}

const Gallery: VFC<Props> = ({ items, collectionName }) => {
  return (
    <section
      className='grid grid-cols-1 gap-x-4 gap-y-8 justify-items-center sm:grid-cols-2 md:grid-cols-3'
      aria-label={`collection shots from: ${collectionName}`}
    >
      {items.map((item, i) => (
        <div
          className={classNames(
            "relative w-full min-h-full h-[600px] md:h-[450px] lg:h-[500px]",
            i % 2 !== 0 ? "row-span-3" : "row-span-2"
          )}
          key={item._id}
        >
          <SanityImage image={item.image} layout='fill' objectFit='cover' />
        </div>
      ))}
    </section>
  );
};

export default Gallery;
