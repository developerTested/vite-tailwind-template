import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {

  const env = loadEnv(mode, process.cwd(), '')

  const vite_port = env.PORT as unknown as number;

  return {
    plugins: [react()],
    server: {
      port: vite_port,
      proxy: {
        '/api': {
          target: env.VITE_SOCIAL_API || 'http://localhost:3001',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      }
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src/"),
      },
    },
  }
})
