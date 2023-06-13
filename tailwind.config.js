/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',

    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        skin: {
          primary: 'var(--primary)',
          secondary: 'var(--secondary)',
        },
      },

      backgroundImage: {
        'hero-image': 'url(/header.png)',
      },
    },
  },
  plugins: [],
};
