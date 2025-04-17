"use client";
import { UserButton } from "@clerk/nextjs";
import { Wallet2 } from "lucide-react";
import React from "react";

function DashHeader() {
  return (
    <div className="p-5 justify-between flex border-b-2">
      <div className="flex gap-2 items-center">
        <Wallet2 />
        <h1 className="font-bold text-2xl">SmartBalance</h1>
      </div>
      <UserButton />
    </div>
  );
}

export default DashHeader;
