import { GetStaticPaths, GetStaticProps } from "next";
import { motion } from "framer-motion";

import type { CollectionPageProps as Props } from "@/src/types/pages";
import { getParam } from "@/src/lib";
import { getCollections, getCollectionWithItems } from "@/src/lib/sanity";
import { Hero, Gallery, CollectionPaths } from "@/src/components/collections";

const CollectionPage: Props = ({ collection, collectionPaths }) => {
  return (
    <motion.main
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
      key={collection._id}
    >
      <Hero
        name={collection.name}
        description={collection.description}
        image={collection.main_image}
      />
      <Gallery
        collectionName={collection.name}
        items={collection.items || []}
      />
      <CollectionPaths collectionPaths={collectionPaths} />
    </motion.main>
  );
};

export default CollectionPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const collections = await getCollections();
  const paths = collections.map(({ slug }) => ({
    params: { slug: slug.current },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = getParam(params, "slug");
  const collections = await getCollections();
  const collection = await getCollectionWithItems(slug);

  const collectionPaths = collections.map((collection) => ({
    id: collection._id,
    name: collection.name,
    slug: collection.slug.current,
  }));

  if (!collection) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      collection,
      collectionPaths,
    },
    revalidate: 60,
  };
};
