import { MessageCircle, Phone } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";

type WhatsAppButtonProps = {
  number: string;
  message?: string;
  label: string;
  variant?: "solid" | "outline" | "phone";
  className?: string;
  ariaLabel?: string;
};

export default function WhatsAppButton({
  number,
  message,
  label,
  variant = "solid",
  className = "",
  ariaLabel,
}: WhatsAppButtonProps) {
  const href = buildWhatsAppLink(number, message);

  const base =
    "focus-ring inline-flex items-center justify-center gap-2 rounded-full font-bold transition-all duration-300";

  const styles: Record<string, string> = {
    solid:
      "bg-cyan text-ink px-8 py-4 text-base sm:text-lg shadow-glow-md hover:shadow-glow-lg hover:-translate-y-0.5 hover:bg-white",
    outline:
      "border border-cyan/50 bg-white/5 px-5 py-3 text-sm text-white hover:border-cyan hover:bg-cyan/10 hover:shadow-glow-sm",
    phone:
      "border border-cyan/40 bg-panel/80 px-4 py-3 text-sm text-white hover:border-cyan hover:shadow-glow-sm",
  };

  const Icon = variant === "phone" ? Phone : MessageCircle;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles[variant]} ${className}`}
      aria-label={ariaLabel ?? `${label} via WhatsApp`}
    >
      <Icon className="h-5 w-5" aria-hidden="true" />
      <span>{label}</span>
    </a>
  );
}
