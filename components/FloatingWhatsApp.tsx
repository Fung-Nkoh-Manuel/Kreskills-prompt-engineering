import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink, RESERVE_MESSAGE, WHATSAPP_NUMBERS } from "@/lib/whatsapp";

export default function FloatingWhatsApp() {
  const href = buildWhatsAppLink(WHATSAPP_NUMBERS.primary, RESERVE_MESSAGE);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Kreskills on WhatsApp"
      className="focus-ring fixed bottom-6 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-cyan text-ink shadow-glow-lg transition-transform duration-300 hover:scale-110 hover:bg-white sm:h-16 sm:w-16"
    >
      <span
        className="pointer-events-none absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan/50 motion-reduce:animate-none"
        aria-hidden="true"
      />
      <MessageCircle className="relative h-7 w-7" aria-hidden="true" />
    </a>
  );
}
