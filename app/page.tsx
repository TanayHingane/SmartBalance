"use client";
import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

function page() {
  return (
    <div className="bg-white">
      <div>
        <Header />
        <Hero />

        <Footer />
      </div>
    </div>
  );
}

export default page;
