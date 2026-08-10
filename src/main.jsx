/* React 入口檔：建立根節點，並用 BrowserRouter 包住整個 App */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App'

import './styles/variables.css'
import './styles/global.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* basename 會依照 Vite base 自動對應 GitHub Pages 的 /my_portfolio/ 路徑 */}
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
