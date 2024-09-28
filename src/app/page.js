"use client";

import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import { BackgroundBeams } from "../components/ui/background-beams";
import { DirectionAwareHover } from "../components/ui/direction-aware-hover";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  return (
    <div>
      <div className="min-h-screen p-8 flex flex-col items-center justify-center bg-black relative text-white">
        <BackgroundBeams className="absolute inset-0 z-0" />
        <div className="z-10 text-white flex flex-col items-center">
          <h1 className="text-6xl font-bold mb-4">Bem-vindo ao</h1>
          <TextGenerateEffect
            words="Núcleo de Estudantes de Telecomunicações e Informática"
            duration={0.7}
          />
        </div>
      </div>
      <div className="min-h-screen flex flex-row items-center justify-between px-20 py-10 bg-zinc-950 text-white">
        <div className="w-96 flex flex-col justify-center">
          <h1>DESCRICAO</h1>
          <p>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Laoreet leo
            felis ad donec inceptos magnis. Ex est non facilisis vestibulum vel
            dignissim. Finibus orci orci fusce arcu erat magnis habitasse. Urna
            magna ex hendrerit ullamcorper, efficitur maecenas bibendum. Libero
            malesuada auctor aenean massa ultrices interdum id ridiculus.
            Maximus nostra maximus erat ornare ligula fermentum aliquam feugiat
            lacus. Arcu quis class quisque luctus fusce. Lobortis finibus
            malesuada adipiscing sodales sagittis.
          </p>
        </div>
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <DirectionAwareHover imageUrl={"/img/template.jpeg"}>
                <p className="font-bold text-xl">Jantar de Curso 23/24</p>
              </DirectionAwareHover>
            </CarouselItem>
            <CarouselItem>...</CarouselItem>
            <CarouselItem>...</CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div id="about" className="min-h-screen flex flex-col justify-center items-center px-20 py-10 bg-black text-white">
        <h1 className="font-extrabold text-3xl">About Us</h1>
        <p className="font-bold text-xl">
          Fundado a 5 de Abril de 2022, no Instituto Superior de Engenharia do
          Porto (ISEP), o Núcleo de Estudantes de Engenharia de Telecomunicações
          e Informática (NEETI) é um órgão que representa o interesse dos
          estudantes do curso.
        </p>
      </div>
      <div className="min-h-screen flex flex-col justify-center items-center px-20 py-10 bg-zinc-950 text-white">
        <h1 className="font-extrabold text-3xl">Objetivos</h1>
        <p className="font-bold text-xl">
          Fomentar o desenvolvimento pessoal e académico de cada estudante
        </p>
        <p className="font-bold text-xl">
          Organizar eventos de carácter pedagógico
        </p>
        <p className="font-bold text-xl">
          Fomentar a comunicação entre alunos e docentes.
        </p>
        <p className="font-bold text-xl">
          Promover o contato direto com o mercado de trabalho
        </p>
      </div>
    </div>
  );
}
