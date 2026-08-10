import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages 會把網站放在 /my_portfolio/ 底下，所以資源路徑要加上 repo 名稱
  base: '/my_portfolio/',
  plugins: [react()],
})
