module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/vue-modules/' : '/',
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'Vue Notes'
    }
  },
  productionSourceMap: false,
  assetsDir: 'assets'
}
