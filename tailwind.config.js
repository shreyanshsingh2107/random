/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "375px", // => @media (min-width: 375px) { ... }
      sm: "640px", // => @media (min-width: 640px) { ... }
      tablet: "768px", // => @media (min-width: 768px) { ... }
      desktop: "1024px", // => @media (min-width: 1024) { ... }
    },
    extend: {
      transitionProperty: {
        'transform': 'transform',
        'opacity': 'opacity',
        'all': 'all', // Adds support for transitioning all properties
      },
      transformOrigin: {
        'top-left': 'top left',
        'top-right': 'top right',
        'bottom-left': 'bottom left',
        'bottom-right': 'bottom right',
      },
    },
  },
  plugins: [],
};
