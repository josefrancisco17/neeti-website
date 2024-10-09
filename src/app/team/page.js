"use client";

import { useState } from "react";
import { TextGenerateEffect } from "../../components/ui/text-generate-effect";
import { BackgroundBeams } from "../../components/ui/background-beams";
import { DirectionAwareHover } from "../../components/ui/direction-aware-hover";
import MemberCard from "@/components/MemberCard";

export default function Team() {
  const [isUnderConstruction] = useState(false);

  if (isUnderConstruction) {
    return (
      <div className="min-h-screen p-8 flex flex-col items-center justify-center bg-black relative text-white">
        <BackgroundBeams className="absolute inset-0 z-0" />
        <div className="z-10 mt-20 text-center">
          <h1 className="text-6xl font-bold mb-4">Page Under Construction</h1>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen p-8 flex flex-col items-center justify-center bg-black relative text-white">
      <BackgroundBeams className="absolute inset-0 z-0" />
      <div className="z-10 mt-20 text-white flex flex-col items-center">
        <h1 className="text-6xl font-bold mb-4">Equipa</h1>
        <div className="grid grid-cols-4 py-13 px-8 gap-4">
          <MemberCard name="test name" role="test role" />
          <MemberCard name="test name" role="test role" />
          <MemberCard name="test name" role="test role" />
          <MemberCard name="test name" role="test role" />
          <MemberCard name="test name" role="test role" />
          <MemberCard name="test name" role="test role" />
          <MemberCard name="test name" role="test role" />
          <MemberCard name="test name" role="test role" />
        </div>
      </div>
    </div>
  );
}
