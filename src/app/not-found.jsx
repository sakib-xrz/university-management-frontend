"use client";

import Image from "next/image";
import ErrorImage from "../assets/error-image.png";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function NotFoundPage() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/profile");
    }, 2000);
  }, []);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        style={{ height: "100vh", width: "auto" }}
        src={ErrorImage}
        alt="Error page of University Management"
      />
    </div>
  );
}
