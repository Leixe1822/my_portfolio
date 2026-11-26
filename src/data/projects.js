/* 作品頁資料：陣列控制排序，id 同時作為卡片編號；translations 存放選用語系。 */
const projects = [
  {
    id: 1,
    title: 'EatWhat 美食地圖探索平台',
    category: 'Restaurant Finder',
    year: '2026',
    description:
      '整合 Google Maps API 與定位服務，提供周邊餐廳搜尋、地圖標記及即時位置更新功能，透過全域狀態管理與響應式設計，打造直覺的美食探索體驗。',
    translations: {
      en: {
        title: 'EatWhat – Restaurant Finder',
        description:
          'An interactive restaurant discovery platform integrating Google Maps API and geolocation, featuring nearby restaurant search, interactive map markers, dynamic location updates, global state management, and responsive design.',
      },
    },
    tags: ['Next.js', 'TypeScript', 'Zustand', 'Google Maps API', 'MUI'],
    githubUrl: 'https://github.com/Leixe1822/EatWhat',
    accent: 'yellow',
  },
  {
    id: 2,
    title: '智慧貸款試算平台',
    category: 'Loan Calculator',
    year: '2026',
    description:
      '以過去銀行業務經驗為出發點，重新整理貸款試算流程，讓使用者能更快理解金額、利率與還款條件之間的關係。',
    tags: ['React', 'Form State', 'Responsive UI'],
    accent: 'mint',
  },
  {
    id: 3,
    title: '個人作品集',
    category: 'Portfolio Website',
    year: '2026',
    description:
      '打造具有個人風格的前端作品集，整合路由、主題切換、拖曳互動與響應式排版，呈現學習歷程與作品內容。',
    tags: ['React Router', 'Theme', 'Interaction'],
    accent: 'purple',
  },
]

export default projects
