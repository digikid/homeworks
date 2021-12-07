module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/vue-notes/' : '/',
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'Vue Notes'
    }
  },
  productionSourceMap: false,
  assetsDir: 'assets'
}
