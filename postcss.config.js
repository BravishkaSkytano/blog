module.exports = {
  plugins: [
    require('autoprefixer'),
    require('tailwindcss'),
    ...(process.env.JEKYLL_ENV == 'production'
      ? [require('cssnano')({ preset: 'default' })]
      : [])
  ]
}