"use client";
import React from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

function Hero() {
  const router = useRouter();
  return (
    <div>
      {/* <Link href={"/dashboard"}>
        <Button>Get Started</Button>
      </Link> */}
      <section className="bg-white lg:grid lg:h-screen lg:place-content-center">
        <div className="mx-auto w-screen max-w-screen-xl px-8 py-36 sm:px-6 sm:py-24 md:grid md:grid-cols-2 md:items-center md:gap-4 lg:px-8 lg:py-32 xl:py-40 xl:w-full xl:px-5">
          <div className="max-w-prose text-center md:text-left">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Understand user flow and
              <strong className="text-indigo-600"> increase </strong>
              conversions
            </h1>

            <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,
              nisi. Natus, provident accusamus impedit minima harum corporis
              iusto.
            </p>

            <div className="mt-4 justify-center items-center md:justify-start flex-col flex md:flex-row gap-4 sm:mt-6">
              <a
                className="inline-block w-full md:w-auto rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
                href="#"
              >
                Get Started
              </a>

              <a
                className="inline-block w-full md:w-auto rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900"
                href="#"
              >
                Learn More
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
    </div>
  );
}

export default Hero;
