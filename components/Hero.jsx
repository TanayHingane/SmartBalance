"use client";
import React from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

function Hero() {
  const router = useRouter();
  return (
    <div>
      <Button
        onClick={() => router.push("/dashboard")}
        className={"cursor-pointer"}
      >
        Get Started
      </Button>
    </div>
  );
}

export default Hero;
