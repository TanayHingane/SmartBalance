"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";

import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const BarChartDash = ({ budgetList }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Activity Overview</CardTitle>
        <CardDescription>
          Stacked bar chart of total spend vs amount
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={budgetList}
            margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
            barSize={50}
            stackOffset="sign"
            barCategoryGap={5}
            barGap={5}
            fill="#15b7b6"
            stroke="#000000"
            strokeWidth={0.5}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="totalSpend" stackId="a" fill="#15b7b6" />
            <Bar dataKey="amount" stackId="b" fill="#9af5ed" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default BarChartDash;
