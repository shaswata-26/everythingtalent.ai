/** @type {import('tailwindcss').Config} */
export const content = [
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
  "./app/**/*.{js,ts,jsx,tsx}",
];

export const theme = {
  extend: {
    keyframes: {
      'fade-in-up': {
        '0%': { opacity: '0', transform: 'translateY(1rem)' },
        '100%': { opacity: '1', transform: 'translateY(0)' },
      },
    },
    animation: {
      'spin-slow': 'spin 20s linear infinite',
      'spin-slow-reverse': 'spin 15s linear infinite reverse',
      'spin-medium': 'spin 25s linear infinite',
      'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
      'spin-slow-reverse': 'spin 15s linear infinite reverse',


    },
  },
};

// ✅ Add this line below:
export const darkMode = 'class'; // Enables dark mode via class (e.g. <html class="dark">)

export const plugins = [];
