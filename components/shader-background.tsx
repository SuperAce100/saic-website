"use client";
import { GrainGradient } from "@paper-design/shaders-react";
export default function ShaderBackground() {
  return (
    <GrainGradient
      width="100%"
      height="100%"
      colors={["#ac1515", "#ffddc7"]}
      colorBack="#1f0000"
      softness={1}
      intensity={0.22}
      noise={0.21}
      shape="wave"
      speed={0.32}
      scale={3.8}
      offsetY={0.7}
      className="absolute inset-0 -z-10 w-full h-full"
    />
  );
}
