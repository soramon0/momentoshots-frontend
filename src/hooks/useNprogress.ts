import { useEffect } from "react";
import { useRouter } from "next/router";
import Nprogress from "nprogress";

export default function useNProgress() {
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => Nprogress.start();
    const handleStop = () => Nprogress.done();

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);
}
