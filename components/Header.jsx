"use client";
import { UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { Wallet2 } from "lucide-react";
import React from "react";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";

function Header() {
  const { user, isSignedIn } = useUser();
  return (
    <div className="p-5 justify-between flex border-b-2">
      <div className="flex gap-2 items-center">
        <Wallet2 color="#42d7d4" height={30} width={30} />
        <h1 className="font-bold text-2xl">SmartBalance</h1>
      </div>
      {isSignedIn ? (
        <UserButton />
      ) : (
        <Link href={"/sign-in"}>
          <Button>Get Started</Button>
        </Link>
      )}
    </div>
  );
}

export default Header;
