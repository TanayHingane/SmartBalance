import React from "react";
import { Bouncy } from "ldrs/react";
import "ldrs/react/Bouncy.css";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../components/ui/alert-dialog";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

function Loading() {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);

    // Simulate a delay (e.g., API call)
    await new Promise((resolve) => setTimeout(resolve, 3000));

    setLoading(false);
  };
  return (
    <div className="">
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <a
            className="inline-block w-full md:w-auto rounded border  bg-[#15b7b6] px-5 py-3 font-medium text-white shadow-sm transition-colors hover:shadow-lg"
            href={"/dashboard"}
            onClick={handleClick}
          >
            <div className="flex items-center justify-center">
              Get Started <ArrowUpRight />
            </div>
          </a>
        </AlertDialogTrigger>
        <AlertDialogContent
          className={
            "items-center justify-center text-center bg-transparent border-transparent shadow-none"
          }
        >
          {loading ? <Bouncy size="55" speed="1.75" color="white" /> : null}
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

export default Loading;
