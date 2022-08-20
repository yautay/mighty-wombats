module.exports = {
  publicPath: process.env.NODE_ENV === 'production'    ? '/mighty-wombats/'    : '/',
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/scss/colours.scss";
          @import "@/scss/layout.scss";
        `
      }
    }
  }
};
