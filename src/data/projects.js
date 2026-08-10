/* Work 頁面使用的作品資料，Projects 會用 map 產生 ProjectCard */
const projects = [
  {
    id: 1,
    title: '智慧貸款試算平台',
    category: 'React / UI Design',
    year: '2026',
    description: '重新整理銀行貸款資訊與試算流程，讓使用者更容易理解方案。',
    tags: ['form state', 'calculator', 'responsive'],
    accent: 'mint',
  },
  {
    id: 2,
    title: 'React 待辦清單',
    category: 'React / JavaScript',
    year: '2026',
    description: '支援新增、完成、刪除與剩餘數量統計的待辦清單。',
    tags: ['crud', 'components', 'local state'],
    accent: 'yellow',
  },
  {
    id: 3,
    title: '個人作品集',
    category: 'React / Responsive',
    year: '2026',
    description: '具有雙主題、拖曳互動與響應式設計的個人網站。',
    tags: ['router', 'theme', 'interaction'],
    accent: 'purple',
  },
]

export default projects
