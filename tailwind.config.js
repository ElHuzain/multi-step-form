/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        'desktop-bg': "url('./images/bg-sidebar-desktop.svg')",
        'mobile-bg': "url('./images/bg-sidebar-mobile.svg')",
      },
      colors: {
        "primary1": "var(--primary-1)",
        "primary2": "var(--primary-2)",
        "primary3": "var(--primary-3)",
        "primary4": "var(--primary-4)",
        "primary5": "var(--primary-5)",
        "secondary1": "var(--secondary-1)",
        "secondary2": "var(--secondary-2)",
        "secondary3": "var(--secondary-3)",
        "secondary4": "var(--secondary-4)",
        "secondary5": "var(--secondary-5)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}