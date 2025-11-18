"use client";
import { GrainGradient } from "@paper-design/shaders-react";
export default function ShaderBackground() {
  const width = window.innerWidth;
  const height = window.innerHeight;

  return (
    <GrainGradient
      width={width}
      height={height}
      colors={["#ac1515", "#ffddc7"]}
      colorBack="#1f0000"
      softness={1}
      intensity={0.22}
      noise={0.21}
      shape="wave"
      speed={0.32}
      scale={3.08}
      offsetY={0.02}
      className="absolute inset-0 -z-10 w-full h-full"
    />
  );
}
