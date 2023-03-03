/* vite 生产配置 */

import { defineConfig } from "vite"

export default defineConfig({
  // 配置打包文件读取路径，这里是相对路径。也可以使用 '/' 即为绝对路径，或者使用网络路径也行
  base: "./",
  build: {
    rollupOptions: {
      output: {
        // 分包
        manualChunks: (id) => {
          if (id.includes("node_modules")) {
            return "vendor"
          }
        }
      }
    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
})
