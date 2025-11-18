"use client";
import ShaderBackground from "@/components/shader-background";
import Navbar from "@/components/navbar";
import { DivideSquareIcon } from "lucide-react";
import Link from "next/link";
import { ImageDithering } from "@paper-design/shaders-react";
import MenuCard from "@/components/menu-card";

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
          <MenuCard href="/speakers" title="Speakers" image="/sam.png" />
          <MenuCard href="/board" title="Board" image="/stanny.png" />
          <MenuCard href="/join" title="Join" image="/mail.png" />
        </div>
      </div>
    </div>
  );
}
