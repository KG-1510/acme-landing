/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      primary: '#FFCF00',
      secondary: '#808088',
      midnight: '#151630',
      white: '#FFFFFF',
      black: '#000000',
      red: '#B20D30',
      green: '#14D641',
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
