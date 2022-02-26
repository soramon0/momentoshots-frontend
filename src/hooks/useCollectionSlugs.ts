import { useCallback, useState } from "react";

import type { Collection } from "@/lib/sanity/schemaTypes";

type Status = "idle" | "pending" | "resolved" | "rejected";
type ErrorState = Record<string, string[]>;

export function useCollectionSlugs() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<ErrorState | null>(null);
  const [collections, setCollections] = useState<Collection[]>([]);

  const getCollectionSlugs = useCallback(async () => {
    try {
      setStatus("pending");
      const res = await fetch("/api/collections");

      const data = await res.json();

      if (!res.ok) {
        setErrors(data);
        setCollections([]);
        setStatus("rejected");
      } else {
        setErrors(null);
        setCollections(data);
        setStatus("resolved");
      }

      return data;
    } catch {
      setErrors({ message: ["Something unexpected happened"] });
      setStatus("rejected");
    }
  }, []);

  return {
    getCollectionSlugs,
    collections,
    errors,
    isIdle: status === "idle",
    isLoading: status === "pending",
    isSuccess: status === "resolved",
    isError: status === "rejected",
  };
}
