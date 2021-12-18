import type { AppProps } from "next/app";

import "@/src/styles/globals.css";
import "@/src/styles/nprogress.css";
import useNProgress from "@/src/hooks/useNprogress";

function MyApp({ Component, pageProps }: AppProps) {
  useNProgress();

  return <Component {...pageProps} />;
}

export default MyApp;
