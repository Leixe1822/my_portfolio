# Lexie 個人作品集

以 React、Vite 與 React Router 建立的前端作品集，包含首頁、關於我、專案介紹與互動預覽。

正式網站：https://leixe1822.github.io/my_portfolio/

## 本機開發

使用 Node.js 22，先安裝套件，再啟動開發伺服器：

```sh
npm ci
npm run dev
```

開啟終端機顯示的網址，網址包含 `/my_portfolio/` 子路徑。

## 程式碼結構

- `src/App.jsx`：管理路由、深淺色主題與語系狀態。
- `src/pages/`：首頁、關於我、作品與 Playground 頁面。
- `src/components/`：導覽列、專案卡片、拖曳容器及分頁預覽元件。
- `src/sections/`：各頁使用的內容區塊。
- `src/data/`：個人資訊與專案卡片資料。
- `src/assets/images/`：作品截圖與個人照片。
- `src/styles/`：共用樣式及主題色彩變數。
- `scripts/prepare-pages.mjs`：建置後建立 GitHub Pages 路由備援頁。
- `.github/workflows/deploy.yml`：檢查、打包、上傳及部署流程。

## 專案內容維護

CASE STUDIES 的卡片資料集中於 `src/data/projects.js`，目前順序為 EatWhat、智慧貸款試算平台及個人作品集。`id` 是卡片編號，`accent` 決定陰影色彩，`translations` 存放可選的翻譯內容。未提供翻譯時顯示原文。

PLAYGROUND 的分頁資料集中於 `SlidingFolder.jsx` 的 `folderItems`，順序為 EatWhat、TAISHIN-BANK、Profile、RWD。第一個分頁預設選取。EatWhat 的兩張圖片由 `slides` 管理，支援箭頭、圓點及手機左右滑動，不自動播放；`projectUrl` 控制 GO 按鈕是否顯示及其連結。

語言按鈕目前切換 EatWhat 卡片及 Playground 圖片說明，並非全站翻譯。主題由 `<html>` 的 `data-theme` 搭配 CSS 變數控制。

## 檢查與打包

```sh
npm run lint
npm run build
npm run preview
```

`npm run build` 會產生 `dist/`，並自動執行 `postbuild`，將 `index.html` 複製為 `404.html`。這讓直接開啟 `/work` 或 `/playground` 時能載入 React 路由；GitHub Pages 的備援回應仍可能帶有 HTTP 404 狀態。

部署只需要 `dist/` 的內容，不需要上傳 `node_modules/`。原始碼與圖片提交至 GitHub；`dist/` 由 CI 重新建置，不納入 Git。

## GitHub Pages 部署

推送到 `main` 或手動執行 GitHub Actions 後，工作流程會：

1. 使用 Node.js 22 與 `npm ci` 安裝鎖定版本的依賴。
2. 執行 ESLint；失敗時停止部署。
3. 建置網站並產生路由備援頁。
4. 上傳 `dist/` 作為 Pages 產物，再部署至 `github-pages` 環境。

儲存庫的 Pages 來源應設為 GitHub Actions。`vite.config.js` 的 `base` 與 React Router 的 `basename` 共同對應 `/my_portfolio/`；若更改儲存庫名稱，需同步調整 base。

變更內容請見 [CHANGELOG.md](CHANGELOG.md)。
