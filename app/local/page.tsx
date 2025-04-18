"use client";

import StatCard from "../../components/StatCard";
import { Button } from "../../components/ui/button";
import { IndianRupee, SquarePen, Trash2 } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [budget, setBudget] = useState(0);
  const [inputBudget, setInputBudget] = useState("");
  const [expenseTitle, setExpenseTitle] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [expenses, setExpenses] = useState<{ title: string; amount: number }[]>(
    []
  );

  const totalExpenses = expenses.reduce((sum, exp) => sum + exp.amount, 0);
  const balance = budget - totalExpenses;

  const handleSetBudget = () => {
    const amount = Number(inputBudget);
    if (!amount || amount < 0) {
      alert("Budget must be a positive number");
      return;
    }
    setBudget(amount);
    setInputBudget("");
  };

  const handleAddExpense = () => {
    if (!expenseTitle || !expenseAmount) {
      alert("Expense title and amount are required");
      return;
    }
    const amount = Number(expenseAmount);
    if (amount <= 0) {
      alert("Expense amount must be positive");
      return;
    }
    if (editingIndex !== null) {
      const updatedExpenses = [...expenses];
      updatedExpenses[editingIndex] = { title: expenseTitle, amount };
      setExpenses(updatedExpenses);
      setEditingIndex(null);
    } else {
      setExpenses([...expenses, { title: expenseTitle, amount }]);
    }
    setExpenseTitle("");
    setExpenseAmount("");
  };

  const handleEditExpense = (index: number) => {
    setExpenseTitle(expenses[index].title);
    setExpenseAmount(expenses[index].amount.toString());
    setEditingIndex(index);
  };

  const handleRemoveExpense = (index: number) => {
    setExpenses(expenses.filter((_, i) => i !== index));
  };

  const printWebsite = (): void => {
    window.print();
  };

  return (
    <div className="min-h-screen mt-16 bg-slate-100 py-10 px-4 lg:px-16">
      <div className="grid gap-6 lg:grid-cols-2 mb-10" id="footnm">
        {/* Budget Card */}
        <div className="bg-white rounded-xl shadow-md p-6 space-y-4">
          <h2 className="text-xl font-semibold text-slate-800">
            Set Your Budget
          </h2>
          <input
            type="number"
            placeholder="Enter Budget"
            className="w-full border border-slate-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-slate-700"
            value={inputBudget}
            onChange={(e) => setInputBudget(e.target.value)}
          />
          <button
            className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-md transition"
            onClick={handleSetBudget}
          >
            Set Budget
          </button>
        </div>

        {/* Expense Card */}
        <div className="bg-white rounded-xl shadow-md p-6 space-y-4">
          <h2 className="text-xl font-semibold text-slate-800">
            Add an Expense
          </h2>
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Expense Title"
              className="w-full border border-slate-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 text-slate-700"
              value={expenseTitle}
              onChange={(e) => setExpenseTitle(e.target.value)}
            />
            <input
              type="number"
              placeholder="Amount"
              className="w-full border border-slate-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 text-slate-700"
              value={expenseAmount}
              onChange={(e) => setExpenseAmount(e.target.value)}
            />
          </div>
          <button
            className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-2 rounded-md transition"
            onClick={handleAddExpense}
          >
            {editingIndex !== null ? "Update Expense" : "Add Expense"}
          </button>
        </div>
      </div>

      {/* Stat Summary */}
      <section className="mb-6">
        <StatCard
          studentCount={budget}
          teacherCount={totalExpenses}
          noteCount={balance}
        />
      </section>

      {/* Expense List */}
      <div className="bg-white rounded-xl shadow-md p-6 space-y-2">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-slate-800">
            Expense History
          </h2>
          <div id="print-button">
            <Button
              className="text-teal-700 border border-slate-300 bg-white hover:bg-slate-50"
              variant={"outline"}
              size={"sm"}
              onClick={printWebsite}
            >
              Print
            </Button>
          </div>
        </div>

        {expenses.length === 0 ? (
          <p className="text-slate-500 text-sm">No expenses added yet.</p>
        ) : (
          expenses.map((expense, index) => (
            <div
              key={index}
              className="flex  justify-between items-center border border-slate-200 rounded-lg p-3 hover:bg-slate-50 transition"
            >
              <div className="flex items-center space-x-4">
                <div className="h-5 w-1 bg-teal-500 rounded"></div>
                <p className="text-slate-700">{expense.title}</p>
              </div>
              <div className="flex items-center space-x-6">
                <p className="flex items-center text-slate-700 font-medium">
                  <IndianRupee className="h-3 w-5 mr-1" />
                  {expense.amount}
                </p>
                <Button
                  className="text-sky-600 border border-slate-300 bg-white hover:bg-sky-50"
                  variant={"outline"}
                  size={"icon"}
                  onClick={() => handleEditExpense(index)}
                  id="edit-button"
                >
                  <SquarePen />
                </Button>
                <Button
                  className="text-red-500 border border-slate-300 bg-white hover:bg-red-50"
                  variant={"outline"}
                  size={"icon"}
                  onClick={() => handleRemoveExpense(index)}
                  id="remove-button"
                >
                  <Trash2 />
                </Button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
