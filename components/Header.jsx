"use client";
import React, { useState } from "react";
import { UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { Menu, Wallet2, X } from "lucide-react";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";
import { cn } from "../lib/utils";

function Header() {
  const { user, isSignedIn } = useUser();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="w-full fixed z-50 bg-white top-0">
      {/* Top Navbar */}
      <div className="p-5 justify-between flex border-b-2">
        <div className="flex gap-2 items-center">
          <Wallet2 color="#42d7d4" height={30} width={30} />
          <h1 className="font-bold text-2xl">SmartBalance</h1>
        </div>

        <div
          className="md:flex gap-10 pr-20 items-center font-sans hidden"
          id="navbarD"
        >
          <Link href="/dashboard">
            <h1 className="text-lg">Cloud</h1>
          </Link>
          <Link href="/local">
            <h1 className="text-lg">Local</h1>
          </Link>
          <Link href="/aboutme">
            <h1 className="text-lg">About Me</h1>
          </Link>
        </div>

        <div className="pr-3 md:flex items-center hidden" id="navbarD">
          {isSignedIn ? (
            <UserButton />
          ) : (
            <Link href="/sign-in">
              <Button
                className={"bg-[#42d7d4] hover:bg-[#42d7d4]/90 cursor-pointer"}
              >
                Sign In
              </Button>
            </Link>
          )}
        </div>

        {/* Mobile Toggle Button */}
        <Button
          variant="outline"
          size="icon"
          className="md:hidden rounded-full cursor-pointer"
          onClick={toggleMobileMenu}
          aria-label="toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 cursor-pointer" />
          ) : (
            <Menu className="h-6 w-6 cursor-pointer" />
          )}
        </Button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          "fixed top-16 h-screen left-0 right-0 z-40 bg-white shadow-md transition-all duration-500 ease-in-out transform md:hidden",
          mobileMenuOpen
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-10 opacity-0 pointer-events-none"
        )}
      >
        <nav className="flex flex-col space-y-4 p-6 animate-fade-in">
          <div className="flex gap-2 items-center text-lg font-medium py-4 border-b border-border/50 transition-all duration-300 hover:text-primary">
            {isSignedIn ? (
              <div className="flex gap-2 items-center">
                <UserButton />
                <h2 className="transition-opacity duration-300">
                  {user?.fullName}
                </h2>
              </div>
            ) : (
              <Link href="/sign-in">
                <Button>Sign In</Button>
              </Link>
            )}
          </div>

          {[
            { href: "/dashboard", label: "Dashboard" },
            { href: "/dashboard/budgets", label: "Budgets" },
            { href: "/dashboard/expenses", label: "Expenses" },
          ].map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-lg font-medium py-3 border-b border-border/50 transition-all duration-300 hover:text-primary",
                `delay-[${i * 100}ms]`
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          {!isSignedIn && (
            <Link
              href="/sign-in"
              className="text-lg font-medium py-3 border-b border-border/50 hover:text-primary transition-all duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sign In
            </Link>
          )}
        </nav>
      </div>
    </div>
  );
}

export default Header;
