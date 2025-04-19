"use client";
import React from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { HeroScrollDemo } from "./Home/hero-scroll";
import { ArrowUpRight } from "lucide-react";

function Hero() {
  const router = useRouter();
  return (
    <div>
      {/* <Link href={"/dashboard"}>
        <Button>Get Started</Button>
      </Link> */}
      <section className="bg-white lg:grid lg:h-screen lg:place-content-center">
        <div className="mx-auto w-screen max-w-screen-xl px-8 py-36 sm:px-6 sm:py-24 md:grid md:grid-cols-2 md:items-center md:gap-4 lg:px-8 lg:py-32 xl:py-40 xl:w-full xl:px-5">
          <div className="max-w-prose text-center md:text-center">
            <div className="inline-flex justify-center items-center my-5 px-3 py-1 rounded-full bg-transparent backdrop-blur-sm border border-neutral-300 dark:border-neutral-800  text-xs font-medium tracking-wider uppercase">
              💰 Expense Tracker
            </div>
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Track your spending and
              <strong className="text-[#42d7d4]"> grow </strong>
              your savings
            </h1>

            <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
              Easily manage your daily expenses, set budgets, and save smarter.
              Say goodbye to money stress and hello to financial freedom.
            </p>

            <div className="mt-4 justify-center items-center md:justify-center flex-col flex md:flex-row gap-4 sm:mt-6">
              <a
                className="inline-block w-full md:w-auto rounded border border-emerald-200 bg-[#42d7d4] px-5 py-3 font-medium text-white shadow-sm transition-colors hover:shadow-lg"
                href={"/dashboard"}
              >
                <div className="flex items-center">
                  Get Started <ArrowUpRight />
                </div>
              </a>

              <a
                className="inline-block flex w-full md:w-auto rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900"
                href="#"
              >
                <div className="flex items-center">
                  About <ArrowUpRight />
                </div>
              </a>
            </div>
          </div>

          <Image
            src="/heroimg.png"
            alt="hero"
            className="mx-auto hidden max-w-lg max-h-lg text-gray-900 md:block"
            width={600}
            height={600}
          />
        </div>
      </section>
      <div className="bg-white md:-mt-28">
        <HeroScrollDemo />
      </div>
    </div>
  );
}

export default Hero;
