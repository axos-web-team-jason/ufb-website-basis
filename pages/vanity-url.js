import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function VanityUrlHere() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/mortgages", "/vanity-url");
    }, 500);
  }, []);

  return <div></div>;
}
