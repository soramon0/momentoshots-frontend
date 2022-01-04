import type { AppProps } from "next/app";
import Head from "next/head";

import "@/styles/globals.css";
import "@/styles/nprogress.css";
import useNProgress from "@/hooks/useNprogress";
import Page from "@/components/layout/Page";

function MyApp({ Component, pageProps }: AppProps) {
  useNProgress();

  return (
    <>
      <Head>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Page>
        <Component {...pageProps} />
      </Page>
    </>
  );
}

export default MyApp;
