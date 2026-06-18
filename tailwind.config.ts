import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#030308",
        surface: "#0a0a12",
        glass: "rgba(255, 255, 255, 0.04)",
        electric: "#3b82f6",
        neon: "#8b5cf6",
        cyan: "#22d3ee",
        glow: "#60a5fa",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        aurora:
          "linear-gradient(135deg, rgba(59,130,246,0.15) 0%, rgba(139,92,246,0.1) 50%, rgba(34,211,238,0.08) 100%)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
        grid: "grid-move 20s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "grid-move": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(50px)" },
        },
      },
      boxShadow: {
        neon: "0 0 20px rgba(59, 130, 246, 0.3), 0 0 60px rgba(139, 92, 246, 0.15)",
        "neon-cyan":
          "0 0 20px rgba(34, 211, 238, 0.4), 0 0 40px rgba(34, 211, 238, 0.1)",
        glass: "0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255,255,255,0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
