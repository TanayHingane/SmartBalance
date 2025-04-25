"use client";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import React, { useState } from "react";
import { Budgets, Expenses } from "../../../../utils/schema";
import { db } from "../../../../utils/dbConfig";
import { toast } from "sonner";
import moment from "moment";
import { Loader } from "lucide-react";
import { eq } from "drizzle-orm";
import { useUser } from "@clerk/nextjs";

function AddExpense({ budgetId, refreshData }) {
  const [name, setName] = useState();
  const [amount, setAmount] = useState();
  const [loading, setLoading] = useState(false);
  const { user } = useUser();
  const addNewExpense = async () => {
    setLoading(true);

    try {
      // 1. Check that this budget exists AND was created by the current user
      const ownedBudget = await db
        .select()
        .from(Budgets)
        .where(eq(Budgets.id, budgetId))
        .then((results) =>
          results.find(
            (b) => b.createdBy === user?.primaryEmailAddress?.emailAddress
          )
        );

      if (!ownedBudget) {
        toast.error(
          "Unauthorized: You cannot add an expense to this budget. You don't own this budget."
        );
        setLoading(false);
        return;
      }

      // 2. If the user owns the budget, allow adding the expense
      await db.insert(Expenses).values({
        name: name,
        amount: amount,
        budgetId: budgetId,
        createdAt: moment().format("DD-MM-YYYY"),
        createdBy: user?.primaryEmailAddress?.emailAddress,
      });

      setAmount("");
      setName("");
      refreshData();
      toast.success("Expense added successfully");
    } catch (error) {
      console.error("Failed to add expense", error);
      toast.error("Failed to add expense");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-5 border-2 rounded-lg">
      <h2 className="font-bold text-lg">Add Expense</h2>
      <div className="mt-3">
        <h2 className="text-black font-medium my-1">Expense Name</h2>
        <Input
          value={name}
          placeholder="e.g. Decor"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mt-3">
        <h2 className="text-black font-medium my-1">Expense Amount</h2>
        <Input
          value={amount}
          placeholder="e.g. ₹1000"
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <Button
        disabled={!(name && amount) || loading}
        className="mt-3 w-full"
        onClick={() => addNewExpense()}
      >
        {loading ? <Loader className="animate-spin" /> : "Add New Expense"}
      </Button>
    </div>
  );
}

export default AddExpense;
