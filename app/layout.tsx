import type { Metadata } from "next";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/700.css";
import "@fontsource/manrope/800.css";
import "@fontsource/caveat/500.css";
import "@fontsource/caveat/600.css";
import "@fontsource/caveat/700.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kreskills | Prompt Engineering Masterclass",
  description:
    "Join the Kreskills Prompt Engineering Masterclass and learn to talk to AI like a pro.",
  keywords: [
    "Kreskills",
    "Prompt Engineering",
    "Masterclass",
    "AI Training Cameroon",
    "Smart Systems",
    "Elite Training",
  ],
  openGraph: {
    title: "Kreskills | Prompt Engineering Masterclass",
    description:
      "Join the Kreskills Prompt Engineering Masterclass and learn to talk to AI like a pro.",
    type: "website",
    siteName: "Kreskills",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kreskills | Prompt Engineering Masterclass",
    description:
      "Join the Kreskills Prompt Engineering Masterclass and learn to talk to AI like a pro.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-display antialiased">{children}</body>
    </html>
  );
}
