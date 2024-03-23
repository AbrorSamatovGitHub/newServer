/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        h1: [
          "70px",
          {
            lineHeight: "73px",
            fontWeight: "800",
          },
        ],
        h2: [
          "50px",
          {
            lineHeight: "59px",
            fontWeight: "800",
          },
        ],
        h3: [
          "35px",
          {
            lineHeight: "47px",
            fontWeight: "800",
          },
        ],
        h4: [
          "36px",
          {
            lineHeight: "50px",
            fontWeight: "400",
          },
        ],
        h5: [
          "30px",
          {
            lineHeight: "35px",
            fontWeight: "700",
          },
        ],
        h6: [
          "25px",
          {
            lineHeight: "29px",
            fontWeight: "800",
          },
        ],
        cart: [
          "18px",
          {
            lineHeight: "21px",
            fontWeight: "600",
          },
        ],
        cart1: [
          "40px",
          {
            lineHeight: "46px",
            fontWeight: "600",
          },
        ],
        cart2: [
          "16px",
          {
            lineHeight: "24px",
            fontWeight: "500",
          },
        ],
        cart3: [
          "25px",
          {
            lineHeight: "34px",
            fontWeight: "700",
          },
        ],
        cart4: [
          "16px",
          {
            lineHeight: "24px",
            fontWeight: "400",
          },

        ],
        cart5: [
          "14px",
          {
            lineHeight: "20px",
            fontWeight: "400",
          },
          
        ],
        cart6: [
          "18px",
          {
            lineHeight: "26px",
            fontWeight: "600",
          },
        ],
        new: [
          "16px",
          {
            lineHeight: "16px",
            fontWeight: "400",
          },
        ],
        new2: [
          "12px",
          {
            lineHeight: "16px",
            fontWeight: "500",
          },
        ],
        new3: [
          "24px",
          {
            lineHeight: "36px",
            fontWeight: "600",
          },
        ],
        new3: [
          "24px",
          {
            lineHeight: "36px",
            fontWeight: "600",
          },
        ],
      },
      colors: {
        primary: " rgb(254, 238, 0)",
        bg1: "rgb(246, 246, 246)",
        text1: "rgb(51, 51, 51)",
        sum1: "rgb(153, 153, 153)",
        sum2: "rgb(51, 51, 51)",
        brand_bg: "rgb(248, 248, 248)",
        // TextP: "rgb(82,92,96)",
        // textP2: "rgb(82, 92, 96)",
      },

      fontFamily: {
        display: ["Yellowtail", "sans-serif"],
      },
      container: {
        center: true,
        padding: "20px",
        screens: {
          "2xl": "1440px",
        },
        screens: {
          sm:"576px",
          md:"768px",
          lg: "992px",
          xl:"1280px",
          "2xl": "1440px",
        },
      },
    },
  },
  plugins: [],
};
