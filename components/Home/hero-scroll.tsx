"use client";
import React, { useEffect, useState } from "react";
import { ContainerScroll } from "./container-animation";
import { Youtube } from "lucide-react";

export function HeroScrollDemo() {
  const [isMobile, setIsMobile] = useState(false);
  const checkIsMobile = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    }
  };
  useEffect(() => {
    checkIsMobile();
  });
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Take control of your finances with <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Smart Tracking Tools
              </span>
            </h1>
          </>
        }
      >
        {isMobile ? (
          <a
            href="https://youtu.be/wKp2vxmG5q4"
            target="__blank"
            className="relative flex gap-10  h-full group/image"
          >
            <div className="w-full  mx-auto bg-transparent dark:bg-transparent group h-full">
              <div className="flex flex-1 w-full h-full flex-col space-y-2  relative">
                {/* TODO */}
                <Youtube className="h-20 w-20 absolute z-10 inset-0 text-red-500 m-auto " />
                <img
                  src="/SmartBLM.png"
                  alt="header"
                  width={800}
                  height={800}
                  className="h-full w-full aspect-square object-cover object-center rounded-sm blur-none group-hover/image:blur-md transition-all duration-200"
                />
              </div>
            </div>
          </a>
        ) : (
          <a
            href="https://youtu.be/wKp2vxmG5q4"
            target="__blank"
            className="relative flex gap-10  h-full group/image"
          >
            <div className="w-full  mx-auto bg-transparent dark:bg-transparent group h-full">
              <div className="flex flex-1 w-full h-full flex-col space-y-2  relative">
                {/* TODO */}
                <Youtube className="h-20 w-20 absolute z-10 inset-0 text-red-500  m-auto " />
                <img
                  src="/SmartBL.png"
                  alt="header"
                  width={800}
                  height={800}
                  className="h-full w-full aspect-square object-cover object-center rounded-sm blur-none group-hover/image:blur-md transition-all duration-200"
                />
              </div>
            </div>
          </a>
        )}
      </ContainerScroll>
    </div>
  );
}
