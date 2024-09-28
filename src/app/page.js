"use client";

import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import { BackgroundBeams } from "../components/ui/background-beams";

export default function Home() {
  return (
    <div className="min-h-screen p-8 flex flex-col items-center justify-center bg-black relative">
      <BackgroundBeams className="absolute inset-0 z-0" />
      <div className="z-10 text-white flex flex-col items-center">
        <h1 className="text-6xl font-bold mb-4">Bem-vindo ao</h1>
        <TextGenerateEffect
          words="Núcleo de Estudantes de Telecomunicações e Informática"
          duration={0.7}
        />
      </div>
    </div>
  );
}
