export const WHATSAPP_NUMBERS = {
  primary: "237677571266",
  secondary: "237673279122",
} as const;

export const RESERVE_MESSAGE =
  "Hello Kreskills, I am interested in the Prompt Engineering Masterclass. I would like to reserve a seat.";

export function buildWhatsAppLink(
  number: string,
  message?: string
): string {
  const base = `https://wa.me/${number}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
