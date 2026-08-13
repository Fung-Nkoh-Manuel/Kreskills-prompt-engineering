import { Globe2, Database, Briefcase, Settings2 } from "lucide-react";

const services = [
  {
    icon: Globe2,
    title: "Digital Presence",
    items: "Web & Brand Design, SEO, Graphic Design, Portfolio Websites",
  },
  {
    icon: Database,
    title: "Data Works",
    items: "Data Analysis & Visualization, Database Admin, Data Entry",
  },
  {
    icon: Briefcase,
    title: "Career & Capital",
    items: "CV Writing, Professional Business Plans, Report Writing",
  },
  {
    icon: Settings2,
    title: "Operations & Growth",
    items: "Admin Services, Social Media Management, Training",
  },
];

export default function Services() {
  return (
    <section
      aria-labelledby="services-heading"
      className="relative z-10 mx-auto max-w-4xl px-6 pb-16"
    >
      <h2
        id="services-heading"
        className="mb-6 text-center text-sm font-bold uppercase tracking-[0.3em] text-white/70"
      >
        Also offering
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {services.map((service, i) => {
          const Icon = service.icon;
          return (
            <div
              key={service.title}
              className="group animate-fade-up rounded-2xl border border-cyan/25 bg-panel/60 p-5 shadow-[0_0_0_rgba(0,0,0,0)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan/70 hover:shadow-glow-sm"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="mb-3 flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-cyan/50 bg-ink/60 text-cyan transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="text-base font-bold text-cyan sm:text-lg">
                  {service.title}
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-white/80">
                {service.items}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
