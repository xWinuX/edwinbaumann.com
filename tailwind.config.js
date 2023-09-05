/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require("tailwindcss-animate"),
    ],
    safelist: [
        {
            pattern: /delay-(75|100|150|200|300|500|700|1000)/,
        },
        "h-0",
    ],
};
