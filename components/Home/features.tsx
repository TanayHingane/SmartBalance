import {
  Banknote,
  SquarePen,
  ReceiptPoundSterlingIcon,
  Goal,
  MessageCircle,
  Wallet,
} from "lucide-react";
import { Marquee } from "../magicui/marquee";
import Image from "next/image";
import { cn } from "../../lib/utils";

const features = [
  {
    icon: <Wallet size={30} className="text-white" />,
    title: "Budget Management",
    description: "Easily track and manage your budgets with intuitive tools.",
    bg: "bg-blue-500",
  },
  {
    icon: <Banknote size={30} className="text-white" />,
    title: "Expense Tracking",
    description: "Monitor your spending and see where your money goes.",
    bg: "bg-green-500",
  },
  {
    icon: <SquarePen size={30} className="text-white" />,
    title: "Financial Insights",
    description:
      "Gain insights into your spending habits and financial health.",
    bg: "bg-purple-500",
  },
  {
    icon: <ReceiptPoundSterlingIcon size={30} className="text-white" />,
    title: "Budget Reports",
    description:
      "Generate detailed reports of your budgets for better analysis.",
    bg: "bg-red-500",
  },
  {
    icon: <Goal size={30} className="text-white" />,
    title: "Savings Goals",
    description:
      "Set and track your savings goals to reach financial milestones.",
    bg: "bg-yellow-500",
  },
  {
    icon: <MessageCircle size={30} className="text-white" />,
    title: "Alerts & Notifications",
    description:
      "Receive timely alerts and notifications to keep you on track.",
    bg: "bg-indigo-500",
  },
];

const techStack = [
  { name: "Next.js", icon: "/nextdotjs.svg", link: "https://nextjs.org/" },
  { name: "React.js", icon: "/react.svg", link: "https://react.dev/" },
  {
    name: "TailwindCSS",
    icon: "/tailwindcss.svg",
    link: "https://tailwindcss.com/",
  },
  { name: "Drizzle", icon: "/drizzle.svg", link: "https://orm.drizzle.team/" },
  {
    name: "PostgreSQL",
    icon: "/postgresql.svg",
    link: "https://www.postgresql.org/",
  },
  { name: "Clerk", icon: "/clerk.svg", link: "https://clerk.com/" },
  { name: "Vercel", icon: "/vercel.png", link: "https://vercel.com/" },
  { name: "Shadcn/ui", icon: "/shadcnui.svg", link: "https://ui.shadcn.com/" },
  { name: "Lucide", icon: "/lucide.svg", link: "https://lucide.dev/" },
];

const FeatureCard = ({ feature }: { feature: (typeof features)[0] }) => (
  <div className="flex flex-col gap-4 p-6 rounded-lg shadow-lg bg-white dark:bg-gray-800 transform hover:scale-105 transition-transform duration-300">
    <div
      className={cn(
        "w-12 h-12 rounded-full flex items-center justify-center",
        feature.bg
      )}
    >
      {feature.icon}
    </div>
    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
      {feature.title}
    </h3>
    <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
  </div>
);

const TechItem = ({ tech }: { tech: (typeof techStack)[0] }) => (
  <a
    href={tech.link}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center w-32 h-16 p-4 transition-transform duration-300 transform bg-gray-100 rounded-lg hover:scale-110 dark:bg-gray-800"
  >
    <Image
      src={tech.icon}
      alt={tech.name}
      width={40}
      height={40}
      className="object-contain"
    />
  </a>
);

const FeaturesSection = () => {
  return (
    <div className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
            Powerful Features
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Everything you need to manage your finances effectively.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </div>
      <div className="my-28 md:my-0 md:mt-44 md:mb-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Built with the Best
          </h3>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Using the most modern and powerful technologies.
          </p>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-transparent to-gray-50 dark:from-gray-900 dark:via-transparent dark:to-gray-900" />
          <Marquee className="gap-4" pauseOnHover>
            {techStack.map((tech) => (
              <TechItem key={tech.name} tech={tech} />
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
