"use client";

import { TextGenerateEffect } from "../../components/ui/text-generate-effect";
import { BackgroundBeams } from "../../components/ui/background-beams";
import { DirectionAwareHover } from "../../components/ui/direction-aware-hover";

export default function Team() {
  return (
    <div className="min-h-screen p-8 flex flex-col items-center justify-center bg-black relative text-white">
      <BackgroundBeams className="absolute inset-0 z-0" />
      <div className="z-10 mt-20 text-white flex flex-col items-center">
        <h1 className="text-6xl font-bold mb-4">Equipa</h1>
        <div className="h-[30rem] relative gap-4 flex items-center justify-center">
          <DirectionAwareHover imageUrl={"/img/profile.jpg"}>
            <p className="font-bold text-xl">Bot1</p>
          </DirectionAwareHover>
          <DirectionAwareHover imageUrl={"/img/profile.jpg"}>
            <p className="font-bold text-xl">Bot2</p>
          </DirectionAwareHover>
          <DirectionAwareHover imageUrl={"/img/profile.jpg"}>
            <p className="font-bold text-xl">Bot3</p>
          </DirectionAwareHover>
        </div>
      </div>
    </div>
  );
}
