"use client";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import React, { useState } from "react";
import { Budgets, Expenses } from "../../../../utils/schema";
import { db } from "../../../../utils/dbConfig";
import { toast } from "sonner";
import moment from "moment";
import { Loader } from "lucide-react";

function AddExpense({ budgetId, refreshData }) {
  const [name, setName] = useState();
  const [amount, setAmount] = useState();
  const [loading, setLoading] = useState(false);
  const addNewExpense = async () => {
    setLoading(true);
    const result = await db
      .insert(Expenses)
      .values({
        name: name,
        amount: amount,
        budgetId: budgetId,
        createdAt: moment().format("DD-MM-YYYY"),
      })
      .returning({ insertedId: Budgets.id });

    setAmount("");
    setName("");

    if (result) {
      setLoading(false);
      refreshData();
      toast.success("Expense added successfully");
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
