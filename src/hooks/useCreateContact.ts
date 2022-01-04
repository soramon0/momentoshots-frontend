import { useState } from "react";

import type { ContactPayload } from "@/lib/sanity";

type Status = "idle" | "pending" | "resolved" | "rejected";
type ErrorState = Record<string, string[]>;

export function useCreateContact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<ErrorState>();

  const isIdle = status === "idle";
  const isLoading = status === "pending";
  const isSuccess = status === "resolved";
  const isError = status === "rejected";

  const createContact = async (payload: ContactPayload) => {
    try {
      setStatus("pending");
      const res = await fetch("/api/contact", {
        body: JSON.stringify(payload),
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
      });

      const data = await res.json();

      if (!res.ok) {
        setErrors(data);
        setStatus("rejected");
      }

      setStatus("resolved");
      return data;
    } catch {
      setErrors({ message: ["Something unexpected happened"] });
      setStatus("rejected");
    }
  };

  return {
    createContact,
    errors,
    isIdle,
    isLoading,
    isSuccess,
    isError,
  };
}
