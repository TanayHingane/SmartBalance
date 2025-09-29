"use client";
import { useUser } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";

import { desc, eq, getTableColumns, sql } from "drizzle-orm";
import { Budgets, Expenses } from "../../../../utils/schema";

import { db } from "../../../../utils/dbConfig";
import ExpenseListTable from "./ExpenseListTable";

export const metadata = {
  title: "Expenses - SmartBalance",
  description: "Track your expenses. Add, view, and manage your expenses to keep your budget in check.",
};

function page() {
  const { user } = useUser();

  const [budgetList, setBudgetList] = useState([]);
  const [expensesList, setExpensesList] = useState([]);

  useEffect(() => {
    user && getBudgetList();
  }, [user]);

  const getBudgetList = async () => {
    const result = await db
      .select({
        ...getTableColumns(Budgets),
        totalSpend: sql`sum(${Expenses.amount})`.mapWith(Number),
        totalItems: sql`count(${Expenses.id})`.mapWith(Number),
      })
      .from(Budgets)
      .leftJoin(Expenses, eq(Budgets.id, Expenses.budgetId))
      .where(eq(Budgets.createdBy, user?.primaryEmailAddress?.emailAddress))
      .groupBy(Budgets.id)
      .orderBy(desc(Budgets.id));
    setBudgetList(result);
    getAllExpenses();
  };

  const getAllExpenses = async () => {
    const result = await db
      .select({
        id: Expenses.id,
        name: Expenses.name,
        amount: Expenses.amount,
        createdAt: Expenses.createdAt,
      })
      .from(Budgets)
      .rightJoin(Expenses, eq(Budgets.id, Expenses.budgetId))
      .where(eq(Budgets.createdBy, user?.primaryEmailAddress?.emailAddress))
      .orderBy(desc(Expenses.id));
    setExpensesList(result);
  };

  return (
    <div className="p-8">
      <ExpenseListTable
        budgetCreatedBy={user?.primaryEmailAddress?.emailAddress}
        expenseList={expensesList}
        refreshData={() => getBudgetList()}
      />
    </div>
  );
}

export default page;
