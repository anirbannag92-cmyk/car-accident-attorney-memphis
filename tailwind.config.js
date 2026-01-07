/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      fontSize: {
        h1: ["1.875rem", { lineHeight: "2.25rem" }], // 30px
        h2: ["1.5rem", { lineHeight: "2rem" }],      // 24px
        h3: ["1.25rem", { lineHeight: "1.75rem" }],  // 20px
        body: ["1rem", { lineHeight: "1.75rem" }],   // 16px
        small: ["0.875rem", { lineHeight: "1.5rem" }],
      },
    },
  },
  plugins: [],
};
