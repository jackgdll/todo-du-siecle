/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/routes/**/*.{html,js,svelte,ts}',
    './src/lib/{components,icons}/**/*.{html,js,svelte,ts}',
    './src/*.{html,js,svelte,ts}',
  ],
  jit: true,
  theme: {
    extend: {},
  },
  plugins: [],
};
