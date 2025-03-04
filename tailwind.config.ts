import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1164px",
      "2xl": "1392px",
    },
    extend: {
      keyframes: {
        "slide-down-in": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0%)" },
        },
        "slide-up-out": {
          "0%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(-100%)" },
        },
        "slide-down-out": {
          "0%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(100%)" },
        },
        "slide-up-in": {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0%)" },
        },
      },
      animation: {
        "slide-down-in": "slide-down-in 0.4s ease-in-out",
        "slide-up-in": "slide-up-in 0.4s ease-in-out",
        "slide-up-out": "slide-up-out 0.2s ease-in-out",
        "slide-down-out": "slide-down-out 0.2s ease-in-out",
      },
      colors: {
        menuBg: "#0f0e0e",
        footerBg: "#242426",
        menuText: "#959595",
        submenuText: "#a0a0a0",
        footerText: "#e5e8e8",
      },
    },
  },
  plugins: [],
} satisfies Config;
