"use client";
import { db } from "../../../utils/dbConfig";
import DashHeader from "./DashHead";
import SideNavbar from "./SideNavBar";
import React, { useEffect } from "react";
import { Budgets } from "../../../utils/schema";
import { eq } from "drizzle-orm";
import { useUser } from "@clerk/nextjs";
import { Toaster } from "../../../components/ui/sonner";

function DashboardLayout({ children }) {
  const user = useUser();

  useEffect(() => {
    user && checkUserBudgets();
  }, [user]);

  const checkUserBudgets = async () => {
    const result = await db
      .select()
      .from(Budgets)
      .where(eq(Budgets.createdBy, user?.primaryEmailAddress?.emailAddress));
    console.log(result);
  };
  return (
    <div>
      <div className="fixed md:w-64 hidden md:block ">
        <SideNavbar />
      </div>
      <div className="md:ml-64">
        <div className="block md:hidden">
          <DashHeader />
        </div>
        <Toaster />
        {children}
      </div>
    </div>
  );
}

export default DashboardLayout;
