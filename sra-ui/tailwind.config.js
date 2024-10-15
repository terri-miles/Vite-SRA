/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: { max: "768px" }, // Custom breakpoint for sm
        md: "1024px", // Custom breakpoint for md
        lg: "1400px", // Custom breakpoint for lg
      },
    },
  },
  plugins: [],
};
