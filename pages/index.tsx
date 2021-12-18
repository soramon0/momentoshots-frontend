import type { NextPage } from "next";
import Head from "next/head";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Introduction from "@/src/components/home/Introducation";
import About from "@/src/components/home/About";
import CTA from "@/src/components/home/CTA";

const Home: NextPage = () => {
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
      <CTA />
    </motion.main>
  );
};

export default Home;
