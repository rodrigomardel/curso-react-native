/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./lib/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: '#4CAF50',
        secondary: '#FF6B6B',
        accent: '#FFD700',
        background: '#fff',
        backgroundDark: '#000',
        text: '#333',
        textLight: '#666',
        textWhite: '#fff',
        border: '#ddd',
        shadow: '#000',
        error: '#FF5722',
        success: '#4CAF50',
        warning: '#FF9800',
        info: '#2196F3',
      },
      fontFamily: {
        'sans': ['System', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

