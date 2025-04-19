"use client";
import React from "react";
import { ContainerScroll } from "./container-animation";

export function HeroScrollDemo() {
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
        <img
          src={`/scr.png`}
          alt="hero"
          height={720}
          width={1200}
          className="mx-auto rounded-2xl object-fill h-full  object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
