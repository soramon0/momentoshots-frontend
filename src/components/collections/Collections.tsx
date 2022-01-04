import type { VFC } from "react";
import { motion } from "framer-motion";

import type { Collection as CollectionType } from "@/lib/sanity/schemaTypes";
import { stagger } from "@/lib/animate";
import Collection from "./Collection";

interface Props {
  collections: CollectionType[];
}

const Collections: VFC<Props> = ({ collections }) => {
  return (
    <motion.div
      className='grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2'
      variants={stagger}
    >
      {collections.map((colection, i) => (
        <Collection collection={colection} index={i + 1} key={colection._id} />
      ))}
    </motion.div>
  );
};

export default Collections;
