import React from "react";
import { Card, CardContent } from "../ui/card";
import {
  Banknote,
  WalletMinimal,
  SquarePen,
  ReceiptPoundSterlingIcon,
  Goal,
  MessageCircle,
} from "lucide-react";

const features = [
  {
    icon: <Banknote size={40} />,
    title: "Budget Management",
    description: "Easily track and manage your budgets with intuitive tools.",
  },
  {
    icon: <WalletMinimal size={40} />,
    title: "Expense Tracking",
    description: "Monitor your spending and see where your money goes.",
  },
  {
    icon: <SquarePen size={40} />,
    title: "Financial Insights",
    description:
      "Gain insights into your spending habits and financial health.",
  },
  {
    icon: <ReceiptPoundSterlingIcon size={40} />,
    title: "Budget Reports",
    description:
      "Generate detailed reports of your budgets for better analysis.",
  },
  {
    icon: <Goal size={40} />,
    title: "Savings Goals",
    description:
      "Set and track your savings goals to reach financial milestones.",
  },
  {
    icon: <MessageCircle size={40} />,
    title: "Alerts & Notifications",
    description:
      "Receive timely alerts and notifications to keep you on track.",
  },
];

import Image from "next/image";

const techStack = [
  {
    name: "Next.js",
    icon: "/nextdotjs.svg",
    link: "",
  },
  {
    name: "React",
    icon: "/react.svg",
    link: "",
  },
  {
    name: "TailwindCSS",
    icon: "/tailwindcss.svg",
    link: "",
  },
  {
    name: "Supabase",
    icon: "/supabase.svg",
    link: "",
  },
  {
    name: "Clerk",
    icon: "/clerk.svg",
    link: "",
  },
  {
    name: "Vercel",
    icon: "/vercel.png",
    link: "",
  },
  {
    name: "Lucide",
    icon: "/lucide.svg",
    link: "",
  },
];

const FeaturesSection = () => {
  return (
    <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Card key={index} className="h-full shadow-lg">
            <CardContent className="flex flex-col items-center p-6">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-center text-gray-600">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="flex items-center justify-center gap-8 sm:gap-12 pt-28 pb-14">
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="flex items-center space-x-2 text-lg text-zinc-600"
            >
              <Image
                src={tech.icon}
                alt={tech.name}
                width={20}
                height={20}
                className="opacity-70"
              />
              <a href={tech.link} className="hidden sm:block">
                {tech.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
