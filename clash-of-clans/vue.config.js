module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/clash-of-clans/' : '/',
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'Clash of Clans'
    }
  },
  productionSourceMap: false,
  assetsDir: 'assets'
}
