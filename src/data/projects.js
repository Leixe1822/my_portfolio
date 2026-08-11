/* Work 頁面使用的作品資料，Projects 會用 map 產生 ProjectCard */
const projects = [
  {
    id: 1,
    title: '智慧貸款試算平台',
    category: 'Loan Calculator',
    year: '2026',
    description:
      '以過去銀行業務經驗為出發點，重新整理貸款試算流程，讓使用者能更快理解金額、利率與還款條件之間的關係。',
    tags: ['React', 'Form State', 'Responsive UI'],
    accent: 'mint',
  },
  {
    id: 2,
    title: 'React 待辦清單',
    category: 'Task Manager',
    year: '2026',
    description:
      '練習 React 元件拆分與狀態管理，支援新增、完成、刪除與剩餘任務統計，讓日常任務可以被清楚追蹤。',
    tags: ['React', 'CRUD', 'Local State'],
    accent: 'yellow',
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
