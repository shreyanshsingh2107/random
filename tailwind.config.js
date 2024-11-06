/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "375px",
      // => @media (min-width: 375px) { ... }
      sm: "640px",
      // => @media (min-width: 640px) { ... }
      tablet: "768px",
      // => @media (min-width: 768px) { ... }
      desktop: "1024px",
      // => @media (min-width: 1024) { ... }
    },
    extend: {},
  },
  plugins: [],
};
