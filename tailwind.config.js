const defaultTheme = require('tailwindcss/defaultTheme');
const forms = require('@tailwindcss/forms');
const aspectRatio = require('@tailwindcss/aspect-ratio');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    minHeight: {
      '100px': '100px',
    },
    maxWidth: {
      '1/2': '50%',
    },
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        arvo: ['"Arvo"', ...defaultTheme.fontFamily.sans]
      },
      spacing: {
        'custom': '38rem',
      },
      rotate: {
        '270': '270deg',
      },
      height: {
        '75': '75vh'
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
        'bbq1': "url('./img/demoBbq/bbq1.jpg')",
        'bbq2': "url('./img/demoBbq/bbq2.jpg')",
        'bbq3': "url('./img/demoBbq/bbq3.jpg')",
        'bbq4': "url('./img/demoBbq/bbq4.jpg')",
        'bbq5': "url('./img/demoBbq/bbq5.jpg')",
        'bbq6': "url('./img/demoBbq/bbq6.jpg')",
        'bbq7': "url('./img/demoBbq/bbq7.jpg')",
        'bbq8': "url('./img/demoBbq/bbq8.jpg')",
        'bbq9': "url('./img/demoBbq/bbq9.jpg')",
      })
    },
  },
  plugins: [
    forms,
    aspectRatio
  ],
}
