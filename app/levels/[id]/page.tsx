"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { useParams, useRouter } from "next/navigation";
import { questions, Question, Option } from "@/app/data/questions";
import CardOption from "@/app/components/CardOption";
import { motion, Transition } from "framer-motion";
import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";

interface RandomProps {
  volume: number;
  pitch: number;
}

export default function Page() {
  const { id } = useParams();
  const phase = Number(id) || 1;
  const router = useRouter();

  const TOTAL_PHASES = 4;

  const phaseQuestions: Question[] = useMemo(
    () => questions.filter((q) => q.phase === phase),
    [phase]
  );

  const [current, setCurrent] = useState(0);
  const [lives, setLives] = useState(3);
  const [removedOptions, setRemovedOptions] = useState<number[]>([]);
  const [disableAll, setDisableAll] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isWrong, setIsWrong] = useState(false);
  const [isPhaseFinished, setIsPhaseFinished] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [focusedCard, setFocusedCard] = useState<number | null>(null);
  const [randomProps, setRandomProps] = useState<RandomProps[]>([]);
  const [spinningGear, setSpinningGear] = useState<number | null>(null);

  const correctAudioRef = useRef<HTMLAudioElement | null>(null);
  const wrongAudioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    correctAudioRef.current = new Audio("/sounds/card_correct.mp3");
    correctAudioRef.current.volume = 0.4;

    wrongAudioRef.current = new Audio("/sounds/card_rip.wav");
    wrongAudioRef.current.volume = 0.4;
  }, []);

  const question = phaseQuestions[current];
  const nextPhase = phase + 1;

  useEffect(() => {
    const props = phaseQuestions[current]?.options.map(() => ({
      volume: 0.25 + Math.random() * 0.1,
      pitch: 0.9 + Math.random() * 0.2,
    }));
    setRandomProps(props || []);
  }, [current, phaseQuestions]);

  // Efeito para resetar animação após término
  useEffect(() => {
    if (spinningGear !== null) {
      const timer = setTimeout(() => {
        setSpinningGear(null);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [spinningGear]);

  function handleOptionClick(optionIndex: number) {
    if (disableAll) return;

    const option: Option | undefined = question?.options[optionIndex];
    if (!option) return;

    if (option.correct) {
      setDisableAll(true);
      setIsCorrect(true);
      setFeedback(option.feedback || "");
      correctAudioRef.current?.play();

      if (current + 1 < phaseQuestions.length) {
        setTimeout(() => {
          setCurrent((c) => c + 1);
          setRemovedOptions([]);
          setDisableAll(false);
        }, 500);
      } else {
        if (nextPhase <= TOTAL_PHASES) {
          setIsPhaseFinished(true);
        } else {
          router.push("/levels/finish");
        }
      }
    } else {
      setLives((prev) => {
        const novo = prev - 1;
        if (novo <= 0) {
          setCurrent(0);
          setRemovedOptions([]);
          setDisableAll(false);
          router.push("/levels/gameover");
          return 3;
        } else {
          setRemovedOptions((prevArr) => [...prevArr, optionIndex]);
          setIsWrong(true);
          setFeedback(option.feedback || "");
          wrongAudioRef.current?.play();
          
          // Define qual engrenagem vai girar (a que está sendo perdida)
          const gearToSpin = prev - 1; // Índice da engrenagem que está sendo perdida
          setSpinningGear(gearToSpin);
          
          return novo;
        }
      });
    }
  }

  if (!question) {
    return (
      <div className="min-h-screen flex items-center justify-center font-game">
        <p>Nenhuma pergunta encontrada para a fase {phase}.</p>
      </div>
    );
  }

  const dropAnimation = { y: 0, opacity: 1 };
  const initialDrop = { y: -200, opacity: 0 };
  const dropTransition: Transition = { type: "spring", stiffness: 120, damping: 12 };

  return (
    <div
      key={phase}
      className="flex flex-col lg:flex-row min-h-screen w-full justify-between gap-4 font-game overflow-hidden relative bg-cover bg-center"
      style={{ backgroundImage: "url('/texture.jpg')" }}
    >
      {/* =============== DESKTOP PANEL (LEFT) =============== */}
      <aside
        className="hidden lg:flex flex-col items-center justify-start pt-10 relative"
        style={{ width: "240px", transform: "translateX(-30px)" }}
      >
        {/* Fundo do painel (MENOR) */}
        <div className="absolute top-0 left-0 h-full w-[230px]">
          <Image
            src="/images/fundo_engrena.png"
            alt="Painel"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Conteúdo sobreposto */}
        <div
          className="relative flex flex-col items-center w-full z-10 gap-6"
          style={{
            marginLeft: "-5px",
            marginTop: "8px",
          }}
        >
          <h1
            className="text-2xl font-bold text-black drop-shadow-lg"
            style={{ marginTop: "-8px" }}
          >
            Fase {phase}-{current + 1}
          </h1>

          {/* Engrenagens */}
          {Array.from({ length: 3 }).map((_, v) => {
            const isSpinning = spinningGear === v;
            const isActive = v < lives;
            
            return (
              <motion.div
                key={v}
                animate={
                  isSpinning
                    ? {
                        rotate: 360,
                      }
                    : {}
                }
                transition={
                  isSpinning
                    ? {
                        rotate: {
                          duration: 0.5,
                          ease: "easeInOut",
                        },
                      }
                    : {}
                }
              >
                <Image
                  src={isActive ? "/images/gear_orange.png" : "/images/gear_gray.png"}
                  alt="gear"
                  width={100}
                  height={100}
                />
              </motion.div>
            );
          })}
        </div>
      </aside>

      {/* ================= CONTEÚDO CENTRAL ================= */}
      <main className="flex-1 flex flex-col justify-start items-center py-6 w-full relative">
        {/* FEEDBACKS */}
        <Dialog open={isCorrect} onOpenChange={setIsCorrect}>
          <DialogContent
            className="z-110 h-48 text-center"
            style={{
              backgroundImage: "url('/textures/mesa_western.jpg')",
              backgroundSize: "cover",
            }}
          >
            <DialogTitle>RESPOSTA CORRETA!!</DialogTitle>
            <p>{feedback}</p>
          </DialogContent>
        </Dialog>

        <Dialog open={isWrong} onOpenChange={setIsWrong}>
          <DialogContent
            className="z-110 h-48 text-center"
            style={{
              backgroundImage: "url('/textures/mesa_western.jpg')",
              backgroundSize: "cover",
            }}
          >
            <DialogTitle>RESPOSTA INCORRETA!</DialogTitle>
            <p>{feedback}</p>
          </DialogContent>
        </Dialog>

        <Dialog open={isPhaseFinished} onOpenChange={setIsPhaseFinished}>
          <DialogContent
            className="z-110 h-48 text-center"
            style={{
              backgroundImage: "url('/textures/mesa_western.jpg')",
              backgroundSize: "cover",
            }}
          >
            <DialogTitle>FIM DE FASE!</DialogTitle>
            <p>Você concluiu a Fase {phase}! Prepare-se para {nextPhase}...</p>
            <Button
              onClick={() => router.push(`/levels/${nextPhase}`)}
              className="mt-2 bg-brand-primary hover:bg-brand-primary-dark"
            >
              Próxima Fase
            </Button>
          </DialogContent>
        </Dialog>

        {/* CORRENTES */}
        <motion.div
          initial={initialDrop}
          animate={dropAnimation}
          className="hidden lg:block absolute top-0 left-[18%]"
        >
          <Image
            src="/images/corrente_esquerda.png"
            alt="Corrente"
            width={90}
            height={300}
          />
        </motion.div>

        <motion.div
          initial={initialDrop}
          animate={dropAnimation}
          className="hidden lg:block absolute top-0 right-[18%]"
        >
          <Image
            src="/images/corrente_direita.png"
            alt="Corrente"
            width={120}
            height={300}
          />
        </motion.div>

        {/* LETREIRO */}
        <motion.div
          initial={initialDrop}
          animate={dropAnimation}
          transition={dropTransition}
          className="relative w-[90%] max-w-[850px] min-h-[95px] mt-10 px-4 flex items-center justify-center text-center shadow-xl bg-center bg-cover"
          style={{ backgroundImage: "url('/textures/letreiro.jpg')" }}
        >
          <span className="text-black text-xl md:text-2xl font-semibold">
            {question.question}
          </span>
        </motion.div>

        {/* CARTAS */}
        <div className="w-full flex flex-wrap justify-center items-end gap-4 mt-16 px-2 relative min-h-[300px]">
          {question.options.map((opt, index) => {
            if (removedOptions.includes(index)) return null;

            const total = question.options.length;
            const fanSpread = 30;
            const startAngle = -fanSpread / 2;
            const rotate = startAngle + (fanSpread / (total - 1)) * index;

            return (
              <CardOption
                key={opt.id}
                text={opt.text}
                onClick={() => handleOptionClick(index)}
                disabled={disableAll}
                index={index}
                initialRotate={rotate}
                isFocused={focusedCard === index}
                setFocusedCard={setFocusedCard}
                initialAnimation={{
                  y: 200,
                  rotate,
                  opacity: 0,
                  animateY: 0,
                  animateOpacity: 1,
                  animateRotate: rotate,
                  delay: index * 0.2,
                }}
                style={{
                  perspective: 1200,
                  "--drop-volume": randomProps[index]?.volume ?? 0.3,
                  "--drop-pitch": randomProps[index]?.pitch ?? 1,
                } as React.CSSProperties}
              />
            );
          })}
        </div>

        {/* MOBILE: VIDAS */}
        <div className="flex flex-col items-center gap-2 mt-6 lg:hidden">
          <h1 className="text-lg font-bold text-black">
            Fase {phase}-{current + 1}
          </h1>
          <div className="flex gap-2">
            {Array.from({ length: 3 }).map((_, v) => {
              const isSpinning = spinningGear === v;
              const isActive = v < lives;
              
              return (
                <motion.div
                  key={v}
                  animate={
                    isSpinning
                      ? {
                          rotate: 360,
                        }
                      : {}
                  }
                  transition={
                    isSpinning
                      ? {
                          rotate: {
                            duration: 0.5,
                            ease: "easeInOut",
                          },
                        }
                      : {}
                  }
                >
                  <Image
                    src={isActive ? "/images/gear_orange.png" : "/images/gear_gray.png"}
                    alt="gear"
                    width={60}
                    height={60}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}