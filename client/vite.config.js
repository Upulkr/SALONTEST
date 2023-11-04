import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
server:{
  
  proxy:{
    '/api':{
      target:'https://salontest-y3ln-f1zktadju-upulkr.vercel.app/',
      secure:false
    },
  },
},

  plugins: [react(),],
})
