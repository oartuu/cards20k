"use client";

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [hoverEffect, setHoverEffect] = useState(false);

  return (
    <div
      className="flex min-h-screen w-dvw items-center justify-center p-4 bg-cover"
      style={{ backgroundImage: "url('/texture.jpg')" }}
    >
      <div className="w-full max-w-7xl h-auto flex flex-col md:flex-row p-4 gap-6">
        {/* IMAGEM LATERAL MAIOR */}
        <div
          className={`
            w-full md:w-3/5 bg-center bg-no-repeat bg-contain
            transition-transform duration-500
            ${hoverEffect ? "scale-110" : "scale-100"}
          `}
          style={{ backgroundImage: "url('/Vector.svg')" }}
        ></div>

        {/* BOTÕES */}
        <div className="w-full md:w-2/5 flex justify-center items-center font-game">
          <div className="flex flex-col items-center space-y-6">
            {/* BOTÃO GRANDE - JOGAR */}
            <Link href="/levels/1">
              <div
                onMouseEnter={() => setHoverEffect(true)}
                onMouseLeave={() => setHoverEffect(false)}
                className="
                  border-2 border-brand-primary font-bold text-4xl text-brand-primary
                  px-14 py-8 w-72 text-center rounded-b-4xl cursor-pointer
                  transition-all duration-300
                  hover:scale-110 hover:shadow-xl hover:bg-brand-primary hover:text-black
                "
              >
                JOGAR
              </div>
            </Link>

            {/* BOTÃO MÉDIO - CRÉDITOS */}
            <Sheet>
              <SheetTrigger asChild>
                <div
                  onMouseEnter={() => setHoverEffect(true)}
                  onMouseLeave={() => setHoverEffect(false)}
                  className="
                    border-2 border-brand-primary font-bold text-3xl text-brand-primary
                    px-12 py-6 w-64 text-center rounded-b-4xl cursor-pointer
                    transition-all duration-300
                    hover:scale-110 hover:shadow-xl hover:bg-brand-primary hover:text-black
                  "
                >
                  CRÉDITOS
                </div>
              </SheetTrigger>
              <SheetContent className="border-2 border-r-0 rounded-l-xl border-brand-primary bg-brand-gray text-brand-light">
                <SheetHeader>
                  <SheetTitle className="text-brand-light text-2xl">
                    CRÉDITOS
                  </SheetTitle>
                </SheetHeader>

                <div className="p-4 space-y-4">
                  <h1 className="text-xl">
                    <span className="font-bold">
                      Arthur do Nascimento Penaforte:
                    </span>
                    Desenvolvedor Front-End.
                  </h1>
                  <h1 className="text-xl">
                    <span className="font-bold">
                      Hugo Henrique Andrade Lima:
                    </span>
                    Diretor de Arte e Designer.
                  </h1>
                  <h1 className="text-xl">
                    <span className="font-bold">
                      Ivisson Pereira Do Nascimento Alves:
                    </span>
                    Arquiteto de software.
                  </h1>
                  <h1 className="text-xl">
                    <span className="font-bold">
                      João Guilherme Nemesio Beltrão:
                    </span>
                    Desenvolvedor Front-End.
                  </h1>
                  <h1 className="text-xl">
                    <span className="font-bold">
                      Pedro Augusto Veiga Pessoa De Araújo:
                    </span>
                    QA.
                  </h1>
                  <h1 className="text-xl">
                    <span className="font-bold">
                      Pedro Guedes Lunguinho Silva:
                    </span>
                    Game Design.
                  </h1>
                  <h1 className="text-xl">
                    <span className="font-bold">Túlio Lemos Cabral: </span>
                    Gestor de projeto e QA.
                  </h1>
                </div>
              </SheetContent>
            </Sheet>

            {/* BOTÃO PEQUENO - SAIR */}
            <Link href="https://youtu.be/dQw4w9WgXcQ?si=Qk66UPnGTi8DqDSb">
              <div
                onMouseEnter={() => setHoverEffect(true)}
                onMouseLeave={() => setHoverEffect(false)}
                className="
                  border-2 border-brand-primary font-bold text-2xl text-brand-primary
                  px-8 py-5 w-52 text-center rounded-b-4xl cursor-pointer
                  transition-all duration-300
                  hover:scale-110 hover:shadow-xl hover:bg-brand-primary hover:text-black
                "
              >
                SAIR
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
