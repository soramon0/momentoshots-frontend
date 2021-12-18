import type { GetStaticProps } from "next";
import Head from "next/head";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import type { HomePageProps as Props } from "@/src/types/pages";
import { getFeaturedCollectionItems } from "@/src/lib/sanity";
import {
  Introduction,
  About,
  FeaturedCollectionItems,
  CTA,
} from "@/src/components/home";

const Home: Props = ({ featuredItems }) => {
  return (
    <motion.main
      className='mb-12 space-y-36 sm:space-y-48'
      exit={{ opacity: 0 }}
    >
      <Head>
        <title>Momento Shots - Home</title>
      </Head>

      <Introduction />
      <About />
      <FeaturedCollectionItems items={featuredItems} />
      <CTA />
    </motion.main>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const featuredItems = await getFeaturedCollectionItems();

  return {
    props: {
      featuredItems,
    },
    revalidate: 60,
  };
};
