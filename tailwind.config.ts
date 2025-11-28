import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        neonPulse: {
          "0%, 100%": { boxShadow: "0 0 10px #dbeafe, 0 0 20px #fbcfe8" },
          "50%": { boxShadow: "0 0 20px #dbeafe, 0 0 35px #fbcfe8" },
        },
      },
      animation: {
        neonPulse: "neonPulse 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
