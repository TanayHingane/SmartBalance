"use client";
import React, { useEffect, useState } from "react";
import { db } from "../../../../../utils/dbConfig";
import { Budgets, Expenses } from "../../../../../utils/schema";
import { and, desc, eq, getTableColumns, sql } from "drizzle-orm";
import { useUser } from "@clerk/nextjs";
import BudgetItem from "../../budgets/BudgetItem";
import AddExpense from "../AddExpense";
import ExpenseListTable from "../ExpenseListTable";
import { Button } from "../../../../../components/ui/button";
import { ArrowBigLeft, ArrowLeft, SquarePen, Trash2 } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../../../../../components/ui/alert-dialog";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import EditBudget from "../../expenses/EditBudget";

function ExpensesScreen({ params }) {
  const { user } = useUser();
  const [budgetInfo, setBudgetInfo] = useState({});
  const [expenseList, setExpenseList] = useState([]);
  const router = useRouter();

  useEffect(() => {
    user && getBudgetInfo();
  }, [user]);

  const getBudgetInfo = async () => {
    const result = await db
      .select({
        ...getTableColumns(Budgets),
        totalSpend: sql`sum(${Expenses.amount})`.mapWith(Number),
        totalItems: sql`count(${Expenses.id})`.mapWith(Number),
      })
      .from(Budgets)
      .leftJoin(Expenses, eq(Budgets.id, Expenses.budgetId))
      .where(
        and(
          eq(Budgets.createdBy, user?.primaryEmailAddress?.emailAddress),
          eq(Budgets.id, params.id)
        )
      )
      .groupBy(Budgets.id);

    setBudgetInfo(result[0]);
    getExpensesList();
  };

  const getExpensesList = async () => {
    const result = await db
      .select()
      .from(Expenses)
      .where(eq(Expenses.budgetId, params.id))
      .orderBy(desc(Expenses.id));

    setExpenseList(result);
    console.log(result);
  };

  const deleteBudget = async () => {
    const deleteExpenseResult = await db
      .delete(Expenses)
      .where(eq(Expenses.budgetId, params.id))
      .returning();

    if (deleteExpenseResult) {
      const result = await db
        .delete(Budgets)
        .where(eq(Budgets.id, params.id))
        .returning();

      console.log(result);
    }
    toast.success("Budget deleted successfully");
    router.replace("/dashboard/budgets");
  };

  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold flex justify-between items-center">
        <div className="flex items-center justify-center gap-1">
          <ArrowLeft onClick={router.back} className="cursor-pointer" />
          My Expenses
        </div>
        <div className="flex gap-2 items-center">
          <EditBudget
            budgetInfo={budgetInfo}
            refreshData={() => getBudgetInfo()}
          />
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                variant="destructive"
                className="flex cursor-pointer"
                size={"sm"}
              >
                <Trash2 /> Delete
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className={undefined}>
              <AlertDialogHeader className={undefined}>
                <AlertDialogTitle className={undefined}>
                  Are you absolutely sure?
                </AlertDialogTitle>
                <AlertDialogDescription className={undefined}>
                  This action cannot be undone. This will permanently delete
                  your Current Budget and All Your Expenses from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter className={undefined}>
                <AlertDialogCancel className={"cursor-pointer"}>
                  Cancel
                </AlertDialogCancel>
                <AlertDialogAction
                  className={"cursor-pointer"}
                  onClick={() => deleteBudget()}
                >
                  Continue
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </h2>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
        {budgetInfo ? (
          <BudgetItem budget={budgetInfo} />
        ) : (
          <div className="h-[150px] w-full bg-slate-200 rounded-lg animate-pulse"></div>
        )}
        <AddExpense budgetId={params.id} refreshData={() => getBudgetInfo()} />
      </div>
      <div className="mt-10">
        <ExpenseListTable
          refreshData={() => getBudgetInfo()}
          expenseList={expenseList}
        />
      </div>
    </div>
  );
}

export default ExpensesScreen;
