/** @type {import('tailwindcss').Config} */
export const content = [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}"
];
export const theme = {
    extend: {
        animation: {
            'spin-slow': 'spin 20s linear infinite',
            'spin-slow-reverse': 'spin 15s linear infinite reverse',
            'spin-medium': 'spin 25s linear infinite',
        },
    },
};
export const plugins = [];
