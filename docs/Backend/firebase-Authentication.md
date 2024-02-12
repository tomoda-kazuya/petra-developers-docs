---
prev:
  text: " Firebase Hosting 設定"
  link: "/Backend/firebase-hosting.md"
next: false
#   text: ""
#   link: ""
---

# Firebase 認証機能設定

---

<!-- 更新バージョン -->
<Badge type="info" text="v1.0.1" />
<!-- ドキュメントのカテゴリ -->
<Badge type="tip" text="Firebase" />

---

[[toc]]

## firebase-Authentication とは

「Firebase Authentication」はユーザー認証機能を提供し、ユーザ情報をクラウドで保存してくれる、Google 運営のサービスです。<br>
Firebase Authentication を利用することで、アプリケーションにユーザー認証機能を独自で実装することなく、ユーザー認証機能を提供できるようになります。<br>。<br>

認証方法には、主に以下が用意されています。<br>

- メールアドレスとパスワードによる認証
- 主要なプロバイダーアカウントによる認証（Google / Twitter / Facebook / Github / Apple / Yahoo! / Microsoft 等）
- 匿名認証
- カスタム認証
- 電話番号認証
