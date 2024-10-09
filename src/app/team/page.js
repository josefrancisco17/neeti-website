"use client";

import { useState } from "react";
import { TextGenerateEffect } from "../../components/ui/text-generate-effect";
import { BackgroundBeams } from "../../components/ui/background-beams";
import { DirectionAwareHover } from "../../components/ui/direction-aware-hover";
import MemberCard from "@/components/MemberCard";

export default function Team() {
  const [isUnderConstruction] = useState(true);

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
    <div className="z-0 min-h-screen p-8 flex flex-col items-center justify-center bg-black relative text-white">
      <BackgroundBeams className="absolute inset-0 z-0" />
      <div className="z-10 my-20 text-white flex flex-col items-center">
        <h1 className="text-6xl font-bold mb-4">Equipa</h1>
        <div className="my-10">
          <div className="w-full h-full flex flex-row gap-4 bg-zinc-800/50 rounded-lg">
            <a className="p-3">2020/21</a>
            <a className="p-3">2021/22</a>
            <a className="p-3">2022/23</a>
            <a className="p-3">2023/24</a>
            <a className="p-3">2024/25</a>
          </div>
        </div>
        <h1 className="text-3xl font-bold text-center py-8 text-gray-50">
          Presidência
        </h1>
        <div className="flex flex-row py-6 px-8 gap-6 justify-items-center">
          <MemberCard name="test name" role="test role" />
          <MemberCard name="test name" role="test role" />
          <MemberCard name="test name" role="test role" />
          <MemberCard name="test name" role="test role" />
        </div>

        <h1 className="text-3xl font-bold text-center py-8 text-gray-50">
          Departamento de Informática
        </h1>
        <div className="flex flex-row py-6 px-8 gap-6 justify-items-center">
          <MemberCard name="test name" role="test role" />
          <MemberCard name="test name" role="test role" />
        </div>

        <h1 className="text-3xl font-bold text-center py-8 text-gray-50">
          Departamento de Gestão
        </h1>
        <div className="flex flex-row py-6 px-8 gap-6 justify-items-center">
          <MemberCard name="test name" role="test role" />
          <MemberCard name="test name" role="test role" />
        </div>

        <h1 className="text-3xl font-bold text-center py-8 text-gray-50">
          Departamento de Marketing
        </h1>
        <div className="flex flex-row py-6 px-8 gap-6 justify-items-center">
          <MemberCard name="test name" role="test role" />
          <MemberCard name="test name" role="test role" />
        </div>
      </div>
    </div>
  );
}
