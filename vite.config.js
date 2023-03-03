import { defineConfig, loadEnv } from "vite"
import viteBaseConfig from "./vite.base.config"
import viteDevConfig from "./vite.dev.config"
import viteProdConfig from "./vite.prod.config"

// 策略模式
const envResolver = {
	serve: () => {
		console.log("开发环境")
		return { ...viteBaseConfig, ...viteDevConfig }
	},
	build: () => {
		console.log("生产环境")
		return { ...viteBaseConfig, ...viteProdConfig }
	},
}

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
	// 环境变量
	const env = loadEnv(mode, process.cwd(), "")

	return envResolver[command]()
})
