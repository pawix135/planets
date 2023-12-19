/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-bg": "#070724",
        "light-gray": "#38384F",
        "lighter-gray": "#838391",
        mercury: "#419EBB",
        venus: "#EDA249",
        earth: "#6f2ed6",
        mars: "#D14C32",
        jupiter: "#D83A34",
        saturn: "#CD5120",
        uranus: "#1ec2a4",
        neptune: "#2d68f0",
      },
    },
  },
  plugins: [],
};
