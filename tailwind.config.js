/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "text-gray": "#4A4747",
        "text-title": "#ffbe05",
      },
      backgroundColor: {
        "custom-brown": "#1C5D99",
        "custom-skill": "#E7ECEF",
        card: "#273C75",
      },
      backgroundImage: {
        bg: "url('/src/assets/bg.svg')",
      },
      animation: {
        text: "text 5s ease infinite",
      },
      keyframes: {
        text: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        fontFamily: {
          poppins: ["Poppins", "sans-serif"],
          lora: ["Lora", "sans-serif"],
          danfo: ["Danfo", "serif"],
        },
      },
    },
    plugins: [require("daisyui")],
  },
};
