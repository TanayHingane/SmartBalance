import { Trash2 } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { db } from "../../../../utils/dbConfig";
import { Expenses, Budgets } from "../../../../utils/schema";
import { eq } from "drizzle-orm";
import { toast } from "sonner";
import { useUser } from "@clerk/nextjs";
import { Bouncy } from "ldrs/react";

function ExpenseListTable({ expenseList, refreshData, budgetCreatedBy }) {
  const { user } = useUser();

  const isOwner = user?.primaryEmailAddress?.emailAddress === budgetCreatedBy;

  const deleteExpense = async (expense) => {
    if (!isOwner) {
      toast.error(
        "You are not authorized to delete this expense as you don't own this budget."
      );
      return;
    }

    const result = await db
      .delete(Expenses)
      .where(eq(Expenses.id, expense.id))
      .returning();

    if (result) {
      toast.success("Expense deleted successfully");
      refreshData();
    }
  };

  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!isOwner) {
    return loading ? (
      <div className="mt-3 ml-7 items-center justify-center">
        <Bouncy size="45" speed="1.75" color="black" />
      </div>
    ) : (
      <div className="mt-3 items-center justify-center">
        <h2 className="text-lg font-bold text-red-500">Swiper, no swiping!</h2>
        <p className="text-base text-red-500 mt-2">
          You are not authorized to view these expenses as you don't own this
          budget. Better View your own budget!
        </p>
      </div>
    );
  }

  return (
    <div className="mt-3">
      <h2 className="text-lg font-bold">Latest Expenses</h2>
      {expenseList.length === 0 ? (
        <p className="text-sm text-gray-500 mt-2">No expenses available.</p>
      ) : (
        <>
          <div className="grid grid-cols-4 bg-slate-100 p-2 pl-7 md:pl-5 rounded-t-lg items-center justify-center mt-3">
            <h2 className="font-semibold">Name</h2>
            <h2 className="font-semibold">Amount</h2>
            <h2 className="font-semibold">Date</h2>
            <h2 className="font-semibold">Action</h2>
          </div>
          {expenseList.map((expense, index) => (
            <div
              key={index}
              className="grid grid-cols-4 bg-slate-50 p-2 pl-9 md:pl-5 items-center justify-center text-xs md:text-base"
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
        </>
      )}
    </div>
  );
}

export default ExpenseListTable;
