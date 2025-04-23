"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import { Button } from "../../../components/ui/button";
import { Menu, Wallet2, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { cn } from "../../../lib/utils";

function DashHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const { user } = useUser();

  return (
    <div className="p-5 justify-between flex border-b-2">
      <a href="/" className="flex gap-2 items-center cursor-pointer">
        <Wallet2 color="#42d7d4" height={30} width={30} />
        <h1 className="font-bold text-2xl">SmartBalance</h1>
      </a>
      <div>
        <Button
          variant="outline"
          size="icon"
          className="md:hidden rounded-full"
          onClick={toggleMobileMenu}
          aria-label="toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>

        {/* Mobile Navigation Menu */}
        <div
          className={cn(
            "fixed inset-0 top-16 z-40 bg-background/95 backdrop-blur-md md:hidden  transition-smooth overflow-hidden",
            mobileMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <nav className="flex flex-col space-y-4 p-6 animate-fade-in">
            <div className="flex gap-2 items-center text-lg font-medium py-4 border-b border-border/50 transition-smooth hover:text-primary">
              <UserButton afterSignOutUrl="/" />
              <h2>{user?.fullName}</h2>
            </div>
            <Link
              href="/dashboard"
              className="text-lg font-medium py-3 border-b border-border/50 transition-smooth hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link
              href="/dashboard/budgets"
              className="text-lg font-medium py-3 border-b border-border/50 transition-smooth hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Budgets
            </Link>
            <Link
              href="/dashboard/expenses"
              className="text-lg font-medium py-3 border-b border-border/50 transition-smooth hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Expenses
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default DashHeader;
