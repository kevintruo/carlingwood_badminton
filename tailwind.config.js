/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const darkMode = "class";
export const theme = {
  extend: {
    animation: { blinking: "blinker 1s step-start infinite", fade: "fadeOut 1s ease-in-out" },
    keyframes: {
      blinker: {
        "50%": { opacity: 0 },
      },
      fadeOut: {
        "0%": { opacity: 1 },
        "100%": { opacity: 0 },
      },
    },
    colors: {
      "pearl-gray": "#98a4b7",
    },
  },
};

export const plugins = [];
