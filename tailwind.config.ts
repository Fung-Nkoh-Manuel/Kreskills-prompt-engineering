import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#040a12",
        panel: "#050c17",
        cyan: {
          glow: "#2fc6ff",
          DEFAULT: "#28b4f0",
          deep: "#0d6ea8",
        },
      },
      fontFamily: {
        display: ["var(--font-manrope)", "sans-serif"],
        script: ["var(--font-caveat)", "cursive"],
      },
      boxShadow: {
        "glow-sm": "0 0 12px rgba(47, 198, 255, 0.35)",
        "glow-md": "0 0 30px rgba(47, 198, 255, 0.35)",
        "glow-lg": "0 0 60px rgba(47, 198, 255, 0.45)",
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "1" },
        },
        floatY: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        circuitFlow: {
          "0%": { strokeDashoffset: "240" },
          "100%": { strokeDashoffset: "0" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        rimSpin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "pulse-glow": "pulseGlow 3.2s ease-in-out infinite",
        "float-y": "floatY 5s ease-in-out infinite",
        "circuit-flow": "circuitFlow 3s linear infinite",
        "fade-up": "fadeUp 0.8s ease-out forwards",
        "rim-spin": "rimSpin 40s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
