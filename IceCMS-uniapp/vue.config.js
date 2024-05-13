module.exports = {
  devServer: {
    disableHostCheck: true,

    // 配置代理
    proxy: {
      "/api": {
        target: "http://127.0.0.1:8181",
        changeOrigin: true, // 是否跨域
        secure: false, // 设置支持https协议的代理
        pathRewrite: {
          "^/api": "" // 将/api开头的请求路径重写为空
        }
      }
    }
  }
};
