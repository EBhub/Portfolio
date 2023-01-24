// const defaultTheme = require("tailwindcss/lib/public/default-theme");
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./layouts/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            keyframes: {
                blink: {
                    '0%': { opacity: '0' },
                    '50%': { opacity: '1' },
                    '100%': { opacity: '0' },
                },
            },
            animation: {
                blink: "blink 1.2s infinite",
            },
        },
    },
    plugins: [],
};
