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
      '75': '.75'
    },
    extend: {
      screens: {
        light: { raw: "(prefers-color-scheme: light)" },
        dark: { raw: "(prefers-color-scheme: dark)" }
      }, 
      textColor: {
        'twitter': '#1DA1F2',
        'linkedin': '#0e76a8',
        'github': '#181717'
      }
    }
  },
  variants: {},
  plugins: []
}
