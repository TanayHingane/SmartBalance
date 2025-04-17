"use client";
import { db } from "../../../utils/dbConfig";
import DashHeader from "./DashHead";
import SideNavbar from "./SideNavBar";
import React, { useEffect } from "react";
import { Budgets } from "../../../utils/schema";
import { eq } from "drizzle-orm";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

function Dashboardlayout({ children }) {
  const user = useUser();
  const router = useRouter();

  useEffect(() => {
    user && checkUserBudgets();
  }, [user]);

  const checkUserBudgets = async () => {
    const result = await db
      .select()
      .from(Budgets)
      .where(eq(Budgets.createdBy, user?.primaryEmailAddress?.emailAddress));
    console.log(result);
    // if (result?.length === 0) {
    //   router.replace("/dashboard/budgets");
    // }
  };
  return (
    <div>
      <div className="fixed md:w-64 hidden md:block ">
        <SideNavbar />
      </div>
      <div className="md:ml-64 ">
        <DashHeader />
        {children}
      </div>
    </div>
  );
}

export default Dashboardlayout;
