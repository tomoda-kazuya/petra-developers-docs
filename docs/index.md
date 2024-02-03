---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Petra Developers Docs"
  # text: "Petra開発用Docs"
  tagline: Petra開発者向けドキュメントサイトです。
  actions:
    - theme: brand
      text: Getting Started
      link: introduction/petra
    # - theme: alt
    #   text: API Examples
    #   link: /api-examples

features:
  - icon:
      src: /icon/Vue-icon.svg
    title: Frontend
    details: Petraのフロントエンドリポジトリのvue-frontについてのドキュメントをまとめています。
    link: Frontend/petra-frontend.md
  - icon:
      src: /icon/Firebase-icon.svg
    title: Backend
    details: Petraで使っているFirebase関連のナレッジをまとめています。
    link: Backend/firebase-setup.md
  - icon:
      src: /icon/Tips-icon.png
    title: Tips
    details: Petra開発におけるTipsやその他ナレッジをまとめています。
    link: Tips/tips-overview.md
---
