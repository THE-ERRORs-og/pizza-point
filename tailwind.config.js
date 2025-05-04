/** @type {import('tailwindcss').Config} */

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primaryMain: "#D32F2F",
        primary02: "#EB4545",
        primary03: "#FA5151",
        primary04: "#FF8B8B",
        secondaryMain: "#FFC107",
        secondary02: "#FFC824",
        secondary03: "#FFD555",
        secondary04: "#FEE499",
        neutral: "#F8F8F8",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        "MrDafoe-Regular": ["MrDafoe-Regular", "serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
};
