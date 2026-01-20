// export default {
//   content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#F9FAFB",
        textPrimary: "#0F172A",
        textSecondary: "#475569",

        primary: "#7C3AED", // purple
        secondary: "#3B82F6", // blue
      },

      backgroundImage: {
        "primary-gradient": "linear-gradient(90deg, #7C3AED 0%, #3B82F6 100%)",
      },

      fontFamily: {
        sans: ["Outfit", "sans-serif"],
      },

      boxShadow: {
        soft: "0 10px 25px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};
