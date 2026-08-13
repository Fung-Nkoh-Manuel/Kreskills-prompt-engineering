import AICentralGlyph from "./AICentralGlyph";
import TrainingStats from "./TrainingStats";
import { leftStats, rightStats } from "@/lib/stats";

export default function Hero() {
  return (
    <section className="relative z-10 mx-auto max-w-5xl px-6 pb-16 pt-10 text-center sm:pt-14">
      <h1 className="animate-fade-up text-[2.6rem] font-extrabold leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl">
        PROMPT
        <br />
        ENGINEERING
      </h1>
      <p
        className="mt-1 animate-fade-up text-[2.6rem] font-extrabold leading-[0.95] tracking-tight text-cyan drop-shadow-[0_0_25px_rgba(47,198,255,0.55)] sm:text-6xl md:text-7xl"
        style={{ animationDelay: "120ms" }}
      >
        MASTERCLASS
      </p>
      <p
        className="mt-5 animate-fade-up font-script text-3xl text-white/90 sm:text-4xl"
        style={{ animationDelay: "220ms" }}
      >
        Learn how to build structured inputs that guide AI safely and accurately.
      </p>

      <div className="mt-12 grid grid-cols-1 items-center gap-10 sm:grid-cols-[1fr_auto_1fr] sm:gap-4">
        <div className="order-2 flex justify-center sm:order-1 sm:justify-start">
          <TrainingStats items={leftStats} align="left" />
        </div>

        <div className="order-1 sm:order-2">
          <AICentralGlyph />
        </div>

        <div className="order-3 flex justify-center sm:justify-end">
          <TrainingStats items={rightStats} align="right" />
        </div>
      </div>
    </section>
  );
}
