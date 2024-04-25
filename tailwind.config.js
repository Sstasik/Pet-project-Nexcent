/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {},
  },
  plugins: [],
};
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      phone: { min: '300px', max: '640px' },
      tablet: { min: '641px', max: '1023px' },
      desktop: { min: '1024', max: '1535px' },
      xldesktop: { min: '1536px' },
    },
  },
};
