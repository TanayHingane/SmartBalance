"use client";
import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Pricing from "../components/Home/prisingg";

import { FAQ } from "../components/faq";
import Footer from "../components/Footer";

function page() {
  return (
    <div className="bg-white">
      <div>
        <Header />
        <Hero />
        <Pricing />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
}

export default page;
