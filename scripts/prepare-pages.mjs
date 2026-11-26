// GitHub Pages 不會自動處理前端路由；提供同一份入口作為 404 備援。
// npm run build 完成後自動執行，使本機打包與 CI 部署使用一致的產物。
import { copyFileSync } from 'node:fs'

copyFileSync(
  new URL('../dist/index.html', import.meta.url),
  new URL('../dist/404.html', import.meta.url),
)
