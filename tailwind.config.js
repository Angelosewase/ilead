/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  variants: {
    extend: {
      content: ['before', 'after'],
    }
  },
  daisyui:{
      theme:['light']
  }
}

