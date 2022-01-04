import type { GetStaticProps } from "next";
import Head from "next/head";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import type { HomePageProps as Props } from "@/types/pages";
import { getFeaturedCollectionItems, getReviews } from "@/lib/sanity";
import {
  Introduction,
  About,
  FeaturedCollectionItems,
  Reviews,
  CTA,
} from "@/components/home";

const Home: Props = ({ featuredItems, reviews }) => {
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
      <Reviews reviews={reviews} />
      <CTA />
    </motion.main>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const featuredItems = await getFeaturedCollectionItems();
  const reviews = await getReviews();

  return {
    props: {
      featuredItems,
      reviews,
    },
    revalidate: 60,
  };
};
