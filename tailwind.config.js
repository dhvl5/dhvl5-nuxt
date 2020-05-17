/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    scale: {
      '20': '.20',
      '50': '.5',
      '73': '.73',
      '75': '.75',
      '78': '.78'
    },
    extend: { 
      textColor: {
        'twitter': '#1DA1F2',
        'linkedin': '#0e76a8',
        'github': '#181717',
        'text-text-color': 'var(--text-color)'
      },
      colors: {
        'background-primary': 'var(--bg-background-primary)',
        'background-secondary': 'var(--bg-background-secondary)'
      }
    }
  },
  variants: {},
  plugins: []
}
