import { Suspense } from "react";
import ShaderBackground from "@/components/shader-background";
import Navbar from "@/components/navbar";
import HomeInteractive from "@/components/home-interactive";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center h-dvh overflow-hidden bg-[#1f0000]">
      <Navbar />
      <ShaderBackground />
      <Suspense fallback={null}>
        <HomeInteractive />
      </Suspense>
    </div>
  );
}
