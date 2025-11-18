"use client";
import ShaderBackground from "@/components/shader-background";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen overflow-hidden">
      <ShaderBackground />
      <h1 className="text-8xl font-medium tracking-tight text-white max-w-2xl text-center">
        Stanford&apos;s home for students in AI
      </h1>
    </div>
  );
}
