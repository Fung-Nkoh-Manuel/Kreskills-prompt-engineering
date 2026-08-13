import type { StatItem } from "@/lib/stats";

export default function TrainingStats({
  items,
  align = "left",
}: {
  items: StatItem[];
  align?: "left" | "right";
}) {
  return (
    <div
      className={`flex gap-6 sm:flex-col sm:gap-10 ${
        align === "right" ? "items-end text-right" : "items-start text-left"
      }`}
    >
      {items.map((stat, i) => {
        const Icon = stat.icon;
        return (
          <div
            key={i}
            className={`flex flex-col gap-2 ${
              align === "right" ? "items-end" : "items-start"
            } animate-fade-up`}
            style={{ animationDelay: `${i * 150}ms` }}
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full border border-cyan/60 bg-panel/70 shadow-glow-sm sm:h-16 sm:w-16">
              <Icon className="h-6 w-6 text-cyan sm:h-7 sm:w-7" aria-hidden="true" />
            </span>
            <div>
              {stat.eyebrow && (
                <p className="text-sm font-semibold text-white/85 sm:text-base">
                  {stat.eyebrow}
                </p>
              )}
              <p className="text-3xl font-extrabold leading-tight text-cyan sm:text-4xl">
                {stat.big}
                {stat.suffix && (
                  <span className="ml-1 text-lg font-bold text-white sm:text-xl">
                    {stat.suffix}
                  </span>
                )}
              </p>
              {stat.label && (
                <p className="text-sm font-semibold text-white/85 sm:text-base">
                  {stat.label}
                </p>
              )}
            </div>
            <span className="h-px w-16 bg-cyan/50" />
          </div>
        );
      })}
    </div>
  );
}
