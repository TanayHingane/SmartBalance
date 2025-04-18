"use client";
import React, { useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import Pricing from "../components/Home/prisingg";

function page() {
  const router = useRouter();
  const user = useUser();

  return (
    <div>
      <div>
        <Header />
        <Hero />
        <Pricing />
      </div>
    </div>
  );
}

export default page;
