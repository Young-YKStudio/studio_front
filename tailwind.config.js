const defaultTheme = require('tailwindcss/defaultTheme');
const forms = require('@tailwindcss/forms');
const aspectRatio = require('@tailwindcss/aspect-ratio');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      spacing: {
        'custom': '38rem',
      },
      backgroundImage: theme => ({
        'Consulting': "url('./img/Consulting_Photo.jpg')",
        'Design': "url('./img/Design_Photo.jpg')",
        'Develop': "url('./img/Develop_Photo.jpg')",
        'Marketing': "url('./img/Digital-Marketing.png')",
        'Service': "url('./img/Service_Photo.jpg')"
      })
    },
  },
  plugins: [
    forms,
    aspectRatio
  ],
}
