const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */


module.exports = withMT({
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        "locoroco": ['LocoRoco', 'sans-serif']
      },
      backgroundImage: {
        lightModeImg: "url('/blue-sky.jpg')",
        darkModeImg: "url('/night-sky.jpg')",
      },
      animation: {
        "ponyo": "ponyo 1.8s linear infinite",
        "jump": "jump 1s linear infinite",
        "wave": "wave 5s linear infinite",
        "puyo": "puyo 1s linear infinite",
        "roll": "roll 3s linear infinite",
        "scaleUp": "scaleUp 2s linear infinite",
        "forwardsBtnAnimation": "forwardsBtnAnimation 2s linear infinite",
        "backwardsBtnAnimation": "backwardsBtnAnimation 3s linear infinite",
      },
      keyframes: {
        ponyo: {
          "0%": { transform: "scale(1.0, 1.0) translate(0%, 0%)" },
          "30%": { transform: "scale(1.0, 1.0) translate(0%, 0%)" },
          "35%": { transform: "scale(0.9, 0.9) translate(0%, 5%)" },
          "45%": { transform: "scale(1.1, 0.9) translate(0%, 10%)" },
          "65%": { transform: "scale(0.9, 1.1) translate(0%, -10%)" },
          "75%": { transform: "scale(1.1, 0.9) translate(0%, 5%)" },
          "100%": { transform: "scale(1.0, 1.0) translate(0%, 0%)" },
        },
        jump: {
          "0%": { transform: "scale(1.0, 1.0) translateY(0%)" },
          "20%": { transform: "scale(1.0, 1.1) translateY(-20%)" },
          "30%": { transform: "scale(0.9, 1.2) translateY(-50%)" },
          "50%": { transform: "scale(1.0, 1.0) translateY(-70%)" },
          "60%": { transform: "scale(1.0, 1.1) translateY(-30%)" },
          "80%": { transform: "scale(1.1, 1.0) translateY(0%)" },
          "90%": { transform: "scale(1.1, 0.9) translateY(0%)" },
          "100%": { transform: "scale(1.0, 1.0) translateY(0%)" },
        },
        wave: {
          "0%, 100%": { borderRadius: "63% 37% 54% 46%/55% 48% 52% 45%" },
          "14%": { borderRadius: "40% 60% 54% 46%/49% 60% 40% 51%" },
          "28%": { borderRadius: "54% 46% 38% 62%/49% 70% 30% 51%" },
          "42%": { borderRadius: "61% 39% 55% 45%/61% 38% 62% 39%" },
          "56%": { borderRadius: "61% 39% 67% 33%/70% 50% 50% 30%" },
          "70%": { borderRadius: "50% 50% 34% 66%/56% 68% 32% 44%" },
          "84%": { borderRadius: "46% 54% 50% 50%/35% 61% 39% 65%" },
        },
        puyo: {
          "0%, 100%": { borderRadius: "70px 70px 40px 40px / 60px 60px 30px 30px", transform: "scale(0.9, 1.05)" },
          "14%": { borderRadius: "70px 70px 40px 40px / 60px 60px 30px 30px", transform: "scale(1.1, 0.9)" },
          "28%": { borderRadius: "70px 70px 40px 40px / 60px 60px 30px 30px", transform: "scale(1, 1) translateY(0)" },
          "42%": { borderRadius: "70px 70px 40px 40px / 60px 60px 30px 30px", transform: "scale(1.05, 0.95) translateY(5%)" },
          "56%": { borderRadius: "70px 70px 40px 40px / 60px 60px 30px 30px", transform: "scale(1, 1) translateY(0)" },
          "70%": { borderRadius: "70px 70px 40px 40px / 60px 60px 30px 30px", transform: "scale(1, 1) translateY(0)" },
          "84%": { borderRadius: "70px 70px 40px 40px / 60px 60px 30px 30px", transform: "scale(1, 1) translateY(0)" },
        },
        roll: {
          "0%": { transform: "rotate(-30deg) translateX(-20%)"},
          "10%": { transform: "rotate(0deg) translateX(0%)"},
          "20%": { transform: "rotate(50deg) translateX(10%)"},
          "30%": { transform: "rotate(50deg) translateX(10%)"},
          "40%": { transform: "rotate(50deg) translateX(10%)"},
          "50%": { transform: "rotate(50deg) translateX(10%)"},
          "60%": { transform: "rotate(50deg) translateX(10%)"},
          "70%": { transform: "rotate(50deg) translateX(10%)"},
          "80%": { transform: "rotate(50deg) translateX(10%)"},
          "90%": { transform: "rotate(315deg) translateX(30%)"},
          "100%": { transform: "rotate(360deg) translateX(60%)"},
        },
        scaleUp: {
          "0%": { transform: "scale(1, 1) translateY(-20%)" },
          "30%": { transform: "scale(3, 3) translateY(-30%)" },
          "50%": { transform: "scale(5, 5) translateY(-30%)" },
          "70%": { transform: "scale(8, 8) translateY(-30%)" },
          "90%": { transform: "scale(15, 15) translateY(-30%)" },
          "100%": { transform: "scale(15, 15) translateY(-30%)" },
        },
        forwardsBtnAnimation: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        backwardsBtnAnimation: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(-360deg)" },
        },
      },
    },
  },
  plugins: [],
});

