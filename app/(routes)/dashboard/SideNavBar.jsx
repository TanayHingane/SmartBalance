"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import {
  Wallet2,
  LayoutDashboard,
  PiggyBank,
  ReceiptText,
  User,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { use, useEffect, useState } from "react";
import LoadingDash from "../LoadingDash";

function SideNavBar() {
  const menuList = [
    {
      id: 1,
      title: "Dashboard",
      icon: <LayoutDashboard />,
      path: "/dashboard",
    },
    {
      id: 2,
      title: "Budgets",
      icon: <PiggyBank />,
      path: "/dashboard/budgets",
    },
    {
      id: 3,
      title: "Expenses",
      icon: <ReceiptText />,
      path: "/dashboard/expenses",
    },
    {
      id: 4,
      title: "About",
      icon: <User />,
      path: "/dashboard/about",
    },
  ];

  const path = usePathname();
  useEffect(() => {
    console.log(path);
  });

  const { user } = useUser();

  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);

    // Simulate a delay (e.g., API call)
    await new Promise((resolve) => setTimeout(resolve, 3000));

    setLoading(false);
  };

  return (
    <div className="h-screen p-5 border shadow-md">
      <div className="flex gap-2 items-center cursor-pointer">
        <a href="/" className="flex gap-2 items-center">
          <Wallet2 width={40} height={40} color="#42d7d4" />
          <h1 className="font-bold text-xl">SmartBalance</h1>
        </a>
      </div>
      <div className="mt-10">
        {menuList.map((item) => (
          <Link href={item.path} key={item.id} onClick={handleClick}>
            <h2
              key={item.id}
              className={`flex gap-3 items-center p-5 rounded-lg cursor-pointer ${
                path == item.path && "bg-[#42d7d4] "
              }`}
            >
              {item.icon}
              <p className="text-base">{item.title}</p>
            </h2>
          </Link>
        ))}
      </div>
      <div className="mt-10 fixed bottom-10 p-5 flex gap-3 items-center">
        <UserButton afterSignOutUrl="/" />
        <p className="text-lg">{user?.firstName}</p>
      </div>
    </div>
  );
}

export default SideNavBar;
