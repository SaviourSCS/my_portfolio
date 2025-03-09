module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: "#0a2638",
          secondary: "#56cca7",
          light: "#ffffff",
          "light-gray": "#e0e0e0",
          "dark-gray": "#333333",
        },
        fontFamily: {
          poppins: ["Poppins", "sans-serif"],
        },
        screens: {
          xs: "480px",
        },
        container: {
          center: true,
          padding: {
            DEFAULT: '1rem',
            sm: '2rem',
            lg: '4rem',
            xl: '5rem',
          },
        },
        animation: {
          'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        },
      },
    },
    plugins: [],
  }