/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      colors: {
        ink: "#020617",
        panel: "rgba(255,255,255,0.06)",
        line: "rgba(255,255,255,0.12)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(56, 189, 248, 0.16)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseLine: {
          "0%, 100%": { opacity: "0.28" },
          "50%": { opacity: "0.78" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        pulseLine: "pulseLine 2.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
