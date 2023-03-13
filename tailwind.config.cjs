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
                placeholder: '#7A7A7A',
                secondary: '#646464',
                primary: '#1597E4',
                formHead: '#182021',
            },
            backgroundColor: {
                primary: '#1597E4',
                card: '#FFFFFF',
                main: '#D8D8D8',
            },
            borderColor: {
                primary: '#1597E4',
                secondary: '#E6E6E6',
            },
            fontSize: {
                xxl: '24px',
                xl: '20px',
                l: '18px',
                m: '16px',
                s: '14px',
            },
        },
    },
    plugins: [],
};
