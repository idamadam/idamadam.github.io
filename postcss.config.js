
var postcss = require('postcss')

module.exports = {
  use: [
    'postcss-import',
    'postcss-custom-media',
    'postcss-calc',
    'postcss-color-function',
    'postcss-discard-comments',
    'postcss-cssnext',
    'autoprefixer'
  ],
  input: 'src/base.css',
  dir: 'css'
}


