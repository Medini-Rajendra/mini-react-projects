module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
        "./index.html",
        "./public/index.html",
        "./src/components/accordion/*.{jsx,js,ts,tsx}",
    ],
    theme: {
        extend: {
            width: {
                '500': '500px',
            },
            colors: {
                'custom-color': '#614101',
            },
        },
    },
    plugins: [],
};