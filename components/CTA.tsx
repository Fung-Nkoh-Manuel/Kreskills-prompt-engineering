import WhatsAppButton from "./WhatsAppButton";
import { RESERVE_MESSAGE, WHATSAPP_NUMBERS } from "@/lib/whatsapp";

export default function CTA() {
  return (
    <section className="relative z-10 mx-auto max-w-3xl px-6 pb-14 text-center">
      <WhatsAppButton
        number={WHATSAPP_NUMBERS.primary}
        message={RESERVE_MESSAGE}
        label="RESERVE YOUR SEAT TODAY!"
        variant="solid"
        className="w-full sm:w-auto"
        ariaLabel="Reserve your seat for the Prompt Engineering Masterclass via WhatsApp"
      />
      <p className="mt-4 text-xs text-white/60">
        Tapping this button opens WhatsApp so you can chat with Kreskills directly.
      </p>
    </section>
  );
}
