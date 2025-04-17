import React from "react";
import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function BarChartDash({ budgetList }) {
  return (
    <div className="border rounded-lg p-5">
      <h2 className="font-bold text-lg">Activity</h2>
      <ResponsiveContainer width={"80%"} height={300}>
        <BarChart
          data={budgetList}
          margin={{
            top: 11,
          }}
        >
          <XAxis dataKey={"name"} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey={"totalSpend"} stackId={"a"} fill="#15b7b6" />
          <Bar dataKey={"amount"} stackId={"a"} fill="#9af5ed" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BarChartDash;
