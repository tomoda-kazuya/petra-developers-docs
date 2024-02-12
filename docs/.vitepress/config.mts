import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/petra-developers-docs/',
  title: "Petra Developers Docs",
  head: [['link', { rel: 'icon', href: 'favicon.png' }]],
  lastUpdated: true,
  description: "Petra開発用ドキュメントサイト",
  themeConfig: {
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    logo: '/icon/Docs-icon.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Frontend', link: 'Frontend/petra-frontend.md' },
      { text: 'Backend', link: 'Backend/firebase-setup.md' },
      { text: 'Tips', link: 'Tips/tips-overview.md' },
      { text: 'Developers', link: 'developers.md' }
    ],

    footer: {
      copyright: 'Copyright © 2024-present Kazuya Tomoda'
    },

    sidebar: {
      '/introduction/': [
        {
          text: 'introduction',
          items: [
            { text: 'what is Petra?', link: 'introduction/petra' }
          ]
        }
      ],
      '/Frontend/': [
        {
          text: 'Frontend',
          items: [
            { text: 'フロントエンドについて', link: 'Frontend/petra-frontend' },
            { text: 'コーディングガイドライン-SCSS', link: 'Frontend/coding-guideline-scss' },
            { text: 'Gitフローとブランチ運用について', link: 'Frontend/git-flow' },
            { text: '実装時のセルフチェックリスト', link: 'Frontend/vue-front-checklist' },
            // { text: 'vue-front-test', link: 'Frontend/vue-front-test' }
          ]
        }
      ],
      '/Backend/': [
        {
          text: 'Backend',
          items: [
            { text: 'Firebase 環境構築', link: 'Backend/firebase-setup.md' },
            { text: 'Firebase WEBアプリ連携', link: 'Backend/firebase-webapp.md' },
            { text: 'Firebase Hosting 設定', link: 'Backend/firebase-hosting.md' },
            { text: 'Firebase 認証機能設定', link: 'Backend/firebase-Authentication.md' }
          ]
        }
      ],
      '/Tips/': [
        {
          text: 'Tips',
          items: [
            { text: '概要', link: 'Tips/tips-overview.md' },
            { text: 'Vue.js基礎', link: 'Tips/vue-basic.md' },
            { text: '単一ファイルコンポーネント', link: 'Tips/sfc.md' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/tomoda-kazuya/petra-developers-docs' }
    ]
  }
})
