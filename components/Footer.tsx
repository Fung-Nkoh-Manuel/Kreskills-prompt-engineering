import WhatsAppButton from "./WhatsAppButton";
import { RESERVE_MESSAGE, WHATSAPP_NUMBERS } from "@/lib/whatsapp";

export default function Footer() {
  return (
    <footer className="relative z-10 mx-auto max-w-3xl px-6 pb-16 pt-4">
      <div className="flex flex-col items-center gap-4 border-t border-cyan/20 pt-8 sm:flex-row sm:justify-center sm:gap-6">
        <WhatsAppButton
          number={WHATSAPP_NUMBERS.primary}
          message={RESERVE_MESSAGE}
          label="+237 677 571 266"
          variant="phone"
          ariaLabel="Contact Kreskills at +237 677 571 266 via WhatsApp"
        />
        <span className="hidden h-6 w-px bg-cyan/30 sm:block" aria-hidden="true" />
        <WhatsAppButton
          number={WHATSAPP_NUMBERS.secondary}
          message={RESERVE_MESSAGE}
          label="+237 673 27 91 22"
          variant="phone"
          ariaLabel="Contact Kreskills at +237 673 27 91 22 via WhatsApp"
        />
      </div>
      <p className="mt-8 text-center text-xs text-white/40">
        &copy; {new Date().getFullYear()} Kreskills. Smart Systems. Elite Training.
      </p>
    </footer>
  );
}
