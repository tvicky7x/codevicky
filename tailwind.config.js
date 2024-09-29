/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textShadow: {
        md: "2px 2px 4px rgba(0, 0, 0, 0.5)", // You can adjust the values here
        lg: "4px 4px 6px rgba(0, 0, 0, 0.75)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-shadow-md": {
          textShadow: "2px 2px 4px rgba(0.5, 0.5, 0.5, 0.4)",
        },
        ".text-shadow-lg": {
          textShadow: "4px 4px 6px rgba(0, 0, 0, 0.75)",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
