/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx}', './src/index.html',
    ],
    theme: {
        extend: {
            colors: {
                dark: '#212121',
                light: '#FAFAFA',
                error: '#D86161',
                placeholder: '#7A7A7A`',
            },
            backgroundColor: {
                primary: '#1597E4',
                card: '#FFFFFF',
            },
            borderColor: {
                primary: '#E6E6E6',
            },
        },
    },
    plugins: [],
};
