import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'


export default defineConfig({
proxy: {
      "/api": {
        target: "http://localhost:5000",
        secure: false,
      },
    },
  plugins: [react(),],
})

