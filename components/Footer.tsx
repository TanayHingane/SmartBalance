import { Earth, Github, Linkedin, Wallet2, Youtube } from "lucide-react";
import React from "react";

function Footer() {
  return (
    <div>
      <footer className="bg-white dark:bg-gray-900 border-t-2 border-gray-100">
        <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-6 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="flex gap-2 items-center justify-center sm:justify-start">
              <Wallet2 color="#42d7d4" height={30} width={30} />
              <h1 className="font-bold text-2xl">SmartBalance</h1>
            </div>

            <p className="mt-4 max-w-xl text-center leading-relaxed text-gray-500 sm:text-left lg:mt-0 dark:text-gray-400">
              SmartBalance is a user-friendly app for setting budgets, tracking
              expenses, and viewing remaining balance with editable expense
              history and real-time updates.
            </p>
          </div>

          <div className="mt-16 border-t border-gray-100 pt-6 sm:flex sm:items-center sm:justify-between dark:border-gray-800">
            <p className="text-center text-sm text-gray-500 sm:text-left dark:text-gray-400">
              &copy; {new Date().getFullYear()} SmartBalance. Created by Tanay
              Hingane as a hobby project.
            </p>

            <div className="mt-4 flex justify-center gap-6 sm:mt-0 sm:justify-start">
              <a
                href="https://www.linkedin.com/in/tanayhingane"
                className="border border-transparent rounded-full p-3 hover:bg-slate-100"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.youtube.com/@Tanay.H03"
                className="border border-transparent rounded-full p-3 hover:bg-slate-100"
              >
                <Youtube size={20} />
              </a>
              <a
                href="https://github.com/TanayHingane"
                className="border border-transparent rounded-full p-3 hover:bg-slate-100"
              >
                <Github size={20} />
              </a>
              <a
                href="https://tanayhingane.vercel.app"
                className="border border-transparent rounded-full p-3 hover:bg-slate-100"
              >
                <Earth size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
