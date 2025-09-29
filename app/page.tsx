import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

export const metadata = {
  title: "SmartBalance - Your Personal Finance Companion",
  description:
    "Take control of your finances with SmartBalance. Track your expenses, create budgets, and achieve your financial goals. Get started today!",
  keywords:
    "personal finance, budget, expense tracker, financial goals, money management",
  openGraph: {
    title: "SmartBalance - Your Personal Finance Companion",
    description:
      "Take control of your finances with SmartBalance. Track your expenses, create budgets, and achieve your financial goals. Get started today!",
    image: "https://smartbalance03.vercel.app.com/heroimg.png",
    url: "https://smartbalance03.vercel.app.com/",
  },
  twitter: {
    card: "summary_large_image",
  },
};

function page() {
  return (
    <div className="bg-white">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}

export default page;
