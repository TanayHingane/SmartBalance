import React from "react";
import BudgetList from "./BudgetList";

export const metadata = {
  title: "Budgets - SmartBalance",
  description: "Manage your budgets. Create, view, and edit your budgets to stay on top of your finances.",
};

function Budgets() {
  return (
    <div className="p-10">
      <h2 className="font-bold text-3xl">My Budgets</h2>
      <BudgetList />
    </div>
  );
}

export default Budgets;
