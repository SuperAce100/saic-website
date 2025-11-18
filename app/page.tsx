"use client";
import ShaderBackground from "@/components/shader-background";
import Navbar from "@/components/navbar";
import { DivideSquareIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen overflow-hidden">
      <Navbar />
      <ShaderBackground />
      <div className="flex flex-col items-center justify-end w-full p-16 flex-1 gap-16">
        <h1 className="text-8xl font-medium tracking-tight text-white max-w-2xl text-left mr-auto">
          Stanford&apos;s home for students in AI
        </h1>
        <div className="flex flex-row items-center justify-center w-full gap-4">
          <Link
            href="/"
            className="flex-1 aspect-square rounded-2xl border border-transparent hover:border-white/30 hover:bg-white/5  transition-all duration-100 p-6 relative"
          >
            <h3 className="text-5xl text-white font-medium tracking-tight absolute bottom-6 left-6 text-center">
              Speakers
            </h3>
          </Link>
          <Link
            href="/"
            className="flex-1 aspect-square rounded-2xl border border-transparent hover:border-white/30 hover:bg-white/5  transition-all duration-100 p-6 relative"
          >
            <h3 className="text-5xl text-white font-medium tracking-tight absolute bottom-6 left-6 text-center">
              Board
            </h3>
          </Link>
          <Link
            href="/"
            className="flex-1 aspect-square rounded-2xl border border-transparent hover:border-white/30 hover:bg-white/5  transition-all duration-100 p-6 relative"
          >
            <h3 className="text-5xl text-white font-medium tracking-tight absolute bottom-6 left-6 text-center">
              Join
            </h3>
          </Link>
        </div>
      </div>
    </div>
  );
}
