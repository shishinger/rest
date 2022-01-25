module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/rest/" : "/",
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "@/variables.scss";`
      }
    }
  }
};
