import Image from "next/image";

export default function Navbar() {
  return (
    <header className="relative z-20 flex flex-col items-center gap-3 pt-10 text-center animate-fade-up">
      <Image
        src="/logo.png"
        alt="Kreskills logo"
        width={135}
        height={55}
        priority
        className="h-14 w-auto sm:h-16"
      />
      <div>
        <p className="text-2xl font-extrabold tracking-[0.35em] sm:text-3xl">
          <span className="text-white">KRES</span>
          <span className="text-cyan">KILLS</span>
        </p>
        <p className="mt-2 text-[11px] font-semibold tracking-[0.4em] text-white/70 sm:text-xs">
          SMART SYSTEMS. ELITE TRAINING.
        </p>
      </div>
    </header>
  );
}

