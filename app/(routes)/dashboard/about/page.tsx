// app/about/page.tsx

import { Linkedin, Github, Earth, Youtube, Mail } from "lucide-react";
import { MarqueeDemo } from "../../../../components/Lang";
import { Button } from "../../../../components/ui/button";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-20 pt-28 md:pt-24 md:py-10 ">
      <div className="relative max-w-2xl w-full bg-white rounded-2xl shadow-xl pt-24 pb-12 px-6 sm:px-10">
        {/* Profile Image */}
        <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
          <div className="w-38 h-38 rounded-full overflow-hidden border-4  shadow-lg">
            <img
              src="https://avatars.githubusercontent.com/u/157800375?v=4"
              alt="Profile"
              width={200}
              height={200}
              className="object-fill"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="text-black text-center mt-3">
          <h1 className="text-3xl font-bold">Tanay Hingane</h1>
          <p className="text-gray-500 mt-3">
            Aspiring Full Stack Developer | 4th Sem Diploma in Computer
            Technology
          </p>

          <div className="my-6 space-y-3 text-center text-black">
            <h1 className="text-xl font-medium">My ToolBox</h1>
            <MarqueeDemo />
          </div>

          <div className="my-6 space-y-5 text-center text-black">
            <h1 className="text-xl font-medium">
              Let's create something amazing together?
            </h1>
            <h2 className="text-sm">
              Ready to bring your next project to life? Let's connect and
              discuss how I can help you achieve your goals.
            </h2>
            <a href="mailto:tanayhingane03@gmail.com?subject=Hello%20I'm%20____%20from%20____%20company&body=I%20want%20to%20start%20a%20new%20project%20about%20____%20and%20time%20duration%20is%20___%20days.">
              <Button className={"cursor-pointer"} variant={""} size={""}>
                Contact Me{" "}
              </Button>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center mt-6 space-x-6 text-xl">
            <a
              href="https://github.com/TanayHingane"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-black"
            >
              <Github />
            </a>
            <a
              href="https://linkedin.com/in/tanayhingane"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-black"
            >
              <Linkedin />
            </a>
            <a
              href="https://www.youtube.com/@Tanay.H03"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-black"
            >
              <Youtube />
            </a>
            <a
              href="mailto:tanayhingane03@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-black"
            >
              <Mail />
            </a>
            <a
              href="https://tanayhingane.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-black"
            >
              <Earth />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
