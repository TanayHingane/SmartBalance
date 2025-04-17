import Link from "next/link";
import React from "react";

function BudgetItem({ budget }) {
  const calculateProgress = () => {
    const progress = (budget.totalSpend / budget.amount) * 100;
    return progress.toFixed(2);
  };

  return (
    <Link href={`/dashboard/expenses/${budget.id}`}>
      <div className="p-5 border-2 rounded-lg hover:shadow cursor-pointer h-[145px]">
        <div className="flex gap-2 items-center justify-between">
          <div className="flex gap-2 items-center">
            <h2 className="text-2xl p-3 bg-slate-100 rounded-full px-3">
              {budget.icon}
            </h2>
            <div>
              <h2 className="font-bold">{budget.name}</h2>
              <h2 className="text-sm text-slate-400">
                {budget.totalItems} Item
              </h2>
            </div>
          </div>
          <h2 className="font-bold text-[#42d7d4] text-lg">₹{budget.amount}</h2>
        </div>
        <div className="mt-5">
          <div className="flex justify-between items-center pb-1">
            <h2 className="text-xs text-slate-400">
              ₹{budget.totalSpend ? budget.totalSpend : 0}S
            </h2>
            <h2 className="text-xs text-slate-400">
              ₹{budget.amount - budget.totalSpend}R
            </h2>
          </div>
          <div className="w-full bg-slate-300 h-2 rounded-full">
            <div
              className="bg-[#42d7d4] h-2 rounded-full"
              style={{ width: `${calculateProgress()}%` }}
            ></div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default BudgetItem;
