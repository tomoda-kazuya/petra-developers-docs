import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/petra-developers-docs/',
  title: "Petra Developers Docs",
  description: "Petra開発用ドキュメントサイト",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/icon/Docs-icon.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Frontend', link: 'Frontend/vue-front-test' },
      { text: 'Backend', link: 'Backend/firebase-test.md' },
      { text: 'Tips', link: 'Tips/tips-test.md' }
    ],

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
          text: 'vue-front',
          items: [
            { text: 'Petra Frontend', link: 'Frontend/petra-frontend' },
            { text: 'vue-front-test', link: 'Frontend/vue-front-test' }
          ]
        }
      ],
      '/Backend/': [
        {
          text: 'Backend',
          items: [
            { text: 'Firebase', link: 'Backend/firebase-test.md' }
          ]
        }
      ],
      '/Tips/': [
        {
          text: 'Tips',
          items: [
            { text: 'tips-test', link: 'Tips/tips-test.md' }
          ]
        }
      ]
    },
    

    socialLinks: [
      { icon: 'github', link: 'https://github.com/tomoda-kazuya/petra-developers-docs' }
    ]
  }
})
