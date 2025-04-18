import { Card, CardContent } from "../components/ui/card";
import { Banknote, BanknoteArrowDown, WalletMinimal } from "lucide-react";

interface StatCardProps {
  studentCount: number;
  teacherCount: number;
  noteCount: number;
}

const StatCard = ({ studentCount, teacherCount, noteCount }: StatCardProps) => {
  const stats = [
    {
      title: "Budget",
      value: studentCount,
      icon: <Banknote className="w-5 h-5 text-[#107275]" />,
      color: "bg-[#e6f8f8]",
    },
    {
      title: "Total Expenses",
      value: teacherCount,
      icon: <BanknoteArrowDown className="w-5 h-5 text-[#dc2626]" />,
      color: "bg-[#fdecec]",
    },
    {
      title: "Balance",
      value: noteCount,
      icon: <WalletMinimal className="w-5 h-5 text-[#059669]" />,
      color: "bg-[#ecfdf5]",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {stats.map((stat, index) => (
        <Card
          key={index}
          className="rounded-2xl border border-neutral-200 shadow-md transition hover:shadow-lg bg-white"
        >
          <CardContent className="flex items-center justify-between p-5">
            <div>
              <p className="text-sm text-gray-500 font-medium mb-1">
                {stat.title}
              </p>
              <h3 className="text-xl font-bold text-gray-800">{stat.value}</h3>
            </div>
            <div
              className={`flex items-center justify-center rounded-full p-3 ${stat.color}`}
            >
              {stat.icon}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default StatCard;
