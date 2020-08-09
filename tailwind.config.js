/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    filter: {
      // defaults to {}
      none: 'none',
      'grayscale-0': 'grayscale(0)',
      'grayscale-1': 'grayscale(1)',
      invert: 'invert(1)',
      sepia: 'sepia(1)'
    },
    backdropFilter: {
      // defaults to {}
      none: 'none',
      blur: 'blur(20px)'
    },
    scale: {
      '20': '.20',
      '50': '.5',
      '73': '.73',
      '75': '.75',
      '78': '.78',
      '190': '8',
      '200': '10'
    },
    extend: {
      textColor: {
        twitter: '#1DA1F2',
        linkedin: '#0e76a8',
        github: '#181717',
        'text-text-color': 'var(--text-color)'
      },
      colors: {
        'background-primary': 'var(--bg-background-primary)',
        'background-secondary': 'var(--bg-background-secondary)'
      },
      fontSize: {
        '7xl': '5rem',
        '8xl': '8rem',
        '9xl': '9rem',
        '10xl': '10rem'
      }
    }
  },
  variants: {
    filter: ['responsive'], // defaults to ['responsive']
    backdropFilter: ['responsive'] // defaults to ['responsive']
  },
  plugins: [require('tailwindcss-filters')]
}
