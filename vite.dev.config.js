/* vite 开发配置 */

import { defineConfig } from "vite"

export default defineConfig({
  server: {
    open: true,
    proxy: {
      // 代理本地 nestjs 起的服务端接口
      "/nest-api": {
        target: "http://127.0.0.1:5000",
        changeOrigin: true,
        rewrite: path => path.replace(/^\/nest-api/, "")
      }
    },
  },
  css: {
    // 开启资源索引
    devSourcemap: true,
  },
})
