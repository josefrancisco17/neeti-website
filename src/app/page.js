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
      <div className="min-h-screen flex flex-row items-center justify-between px-20 py-10 bg-zinc-950 text-white bg-gradient-to-b from-black to-zinc-950">
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
      <div id="about" className="min-h-screen flex flex-col justify-center items-center px-20 py-10 bg-black text-white bg-gradient-to-b from-zinc-950 to-zinc-900">
        <h1 className="font-extrabold text-5xl mb-6">About Us</h1>
        <ul className="font-bold text-xl w-5/6 text-center pt-5 space-y-4 list-none">
          <li className="flex items-center justify-center space-x-2">
            <span className="text-3xl">🗓️</span>
            <span>Fundado em 5 de Abril de 2022</span>
          </li>
          <li className="flex items-center justify-center space-x-2">
            <span className="text-3xl">🏛️</span>
            <span>ISEP - Instituto Superior de Engenharia do Porto</span>
          </li>
          <li className="flex items-center justify-center space-x-2">
            <span className="text-3xl">🎓</span>
            <span>Representamos os estudantes de Telecomunicações e Informática</span>
          </li>
        </ul>
      </div>
      <div className="min-h-screen flex flex-col justify-center items-center px-20 py-10 bg-gradient-to-b from-zinc-900 to-zinc-900 text-white space-y-10">
        <h1 className="font-extrabold text-5xl tracking-tight text-center mb-8">Objetivos</h1>
        
        <div className="space-y-6 max-w-4xl">
          <div className="flex flex-col items-center md:flex-row md:space-x-6">
            <span className="text-4xl md:text-5xl text-indigo-500">🎯</span>
            <p className="font-bold text-xl text-center md:text-left md:text-2xl">
              Incentivar o crescimento pessoal e académico de todos os estudantes
            </p>
          </div>
    
          <div className="flex flex-col items-center md:flex-row md:space-x-6">
            <span className="text-4xl md:text-5xl text-green-500">📚</span>
            <p className="font-bold text-xl text-center md:text-left md:text-2xl">
              Organizar eventos de carácter pedagógico
            </p>
          </div>
    
          <div className="flex flex-col items-center md:flex-row md:space-x-6">
            <span className="text-4xl md:text-5xl text-yellow-500">💬</span>
            <p className="font-bold text-xl text-center md:text-left md:text-2xl">
              Fomentar a comunicação entre alunos e docentes
            </p>
          </div>
      
          <div className="flex flex-col items-center md:flex-row md:space-x-6">
            <span className="text-4xl md:text-5xl text-red-500">🌐</span>
            <p className="font-bold text-xl text-center md:text-left md:text-2xl">
              Promover o contato direto com o mercado de trabalho
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
