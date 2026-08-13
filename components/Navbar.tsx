import KLogo from "./KLogo";

export default function Navbar() {
  return (
    <header className="relative z-20 flex flex-col items-center gap-3 pt-10 text-center animate-fade-up">
      <KLogo className="h-16 w-16 sm:h-20 sm:w-20" />
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
