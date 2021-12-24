import type { AppProps } from "next/app";
import Head from "next/head";

import "@/src/styles/globals.css";
import "@/src/styles/nprogress.css";
import useNProgress from "@/src/hooks/useNprogress";
import Page from "@/src/components/layout/Page";

function MyApp({ Component, pageProps }: AppProps) {
  useNProgress();

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Page>
        <Component {...pageProps} />
      </Page>
    </>
  );
}

export default MyApp;
