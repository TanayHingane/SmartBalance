"use client";
import React from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";

function Hero() {
  const router = useRouter();
  return (
    <div>
      <Link href={"/dashboard"}>
        <Button>Get Started</Button>
      </Link>
    </div>
  );
}

export default Hero;
