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
      rotate: {
        '270': '270deg',
      },
      backgroundImage: theme => ({
        'Consulting': "url('./img/Consulting_Photo.jpg')",
        'Design': "url('./img/Design_Photo.jpg')",
        'Develop': "url('./img/Develop_Photo.jpg')",
        'Marketing': "url('./img/Digital-Marketing.png')",
        'Service': "url('./img/Service_Photo.jpg')",
        'Restaurant': "url('./img/restaurant_photo.jpg')",
        'Hair': "url('./img/hair_photo.jpeg')",
        'eCommerce': "url('./img/ecommerce_photo.jpeg')",
        'Doctor': "url('./img/doctor_photo2.jpg')",
      })
    },
  },
  plugins: [
    forms,
    aspectRatio
  ],
}
