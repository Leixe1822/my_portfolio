import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite 建置設定：啟用 React，並指定 GitHub Pages 的專案子路徑。
export default defineConfig({
  // GitHub Pages 會把網站放在 /my_portfolio/ 底下，所以資源路徑要加上 repo 名稱
  base: '/my_portfolio/',
  plugins: [react()],
})
