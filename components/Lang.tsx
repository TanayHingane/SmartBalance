import { cn } from "../lib/utils";
import { Marquee } from "./magicui/marquee";

const reviews = [
  {
    name: "Appwrite",
    img: "/skill/Appwrite.svg",
  },
  {
    name: "JavaScript",
    img: "/skill/JavaScript.svg",
  },
  {
    name: "TypeScript",
    img: "/skill/TypeScript.svg",
  },
  {
    name: "React",
    img: "/skill/React.svg",
  },
  {
    name: "Next.js",
    img: "/skill/Next.js.svg",
  },
  {
    name: "Tailwind CSS",
    img: "/skill/TailwindCSS.svg",
  },
  {
    name: "Git+GitHub",
    img: "/skill/GitHub.svg",
  },
  {
    name: "Node.js",
    img: "/skill/Node.js.svg",
  },
  {
    name: "Shadcn/UI",
    img: "/skill/shadcn.svg",
  },
  {
    name: "Vercel",
    img: "/skill/Vercel.svg",
  },
  {
    name: "Cloudflare",
    img: "/skill/Cloudflare.svg",
  },
  {
    name: "Figma",
    img: "/skill/Figma.svg",
  },
  {
    name: "PHP",
    img: "/skill/PHP.svg",
  },
];

const firstRow = reviews;

const ReviewCard = ({ img, name }: { img: string; name: string }) => {
  return (
    <figure
      className={cn(
        "relative h-full w-44 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-neutral-600 bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-sm" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col justify-center">
          <p className="text-base font-medium text-black">{name}</p>
        </div>
      </div>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
    </div>
  );
}
