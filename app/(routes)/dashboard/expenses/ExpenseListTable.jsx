import { Trash2 } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { db } from "../../../../utils/dbConfig";
import { Expenses } from "../../../../utils/schema";
import { eq } from "drizzle-orm";
import { toast } from "sonner";

function ExpenseListTable({ expenseList, refreshData }) {
  const deleteExpense = async (expense) => {
    const result = await db
      .delete(Expenses)
      .where(eq(Expenses.id, expense.id))
      .returning();

    if (result) {
      toast.success("Expense deleted successfully");
      refreshData();
    }
    console.log(result);
  };

  return (
    <div className="mt-3">
      <h2 className="text-lg font-bold">Latest Expenses</h2>
      <div className="grid grid-cols-4 bg-slate-100 p-2 rounded-t-lg items-center justify-center mt-3">
        <h2 className="font-semibold">Name</h2>
        <h2 className="font-semibold">Amount</h2>
        <h2 className="font-semibold">Date</h2>
        <h2 className="font-semibold">Action</h2>
      </div>
      {expenseList.map((expense, index) => (
        <div
          key={index}
          className="grid grid-cols-4 bg-slate-50 p-2 items-center justify-center text-xs md:text-base"
        >
          <h2>{expense.name}</h2>
          <h2>{expense.amount}</h2>
          <h2>{expense.createdAt}</h2>
          <h2>
            <Button
              className="p-2 rounded-lg cursor-pointer"
              variant="outline"
              onClick={() => deleteExpense(expense)}
            >
              <Trash2 className="text-red-500 cursor-pointer" />
            </Button>
          </h2>
        </div>
      ))}
    </div>
  );
}

export default ExpenseListTable;
