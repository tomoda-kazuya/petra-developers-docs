---
# prev:
#   text: "コーディングガイドライン-SCSS"
#   link: "/Frontend/coding-guideline-scss.md"
next:
  text: " VueとFirebaseを接続"
  link: "/Backend/firebase-webapp.md"
---

# Firebase 環境構築

---

<!-- 更新バージョン -->
<Badge type="info" text="v1.0.0" />
<!-- ドキュメントのカテゴリ -->
<Badge type="tip" text="Firebase" />

---

[[toc]]

## Firebase とは

Firebase とは、Google が提供してするモバイルおよび Web アプリのバックエンド処理向けの開発プラットフォームです。Firebase を活用することで、ユーザー認証、データベースの保存、サイトの公開、サイト分析などを簡単に実装できます。 Firebase は無料のプランから使用できるため、個人でも利用しやすく高い人気を誇っています。

## Petra 開発における Firebase

Petra 開発では以下の箇所で Firebase のサービスを使います。

- ユーザー認証機能（(Firebase Authentication)
  ※Tips にサービスの概要を書いて、そこへのリンクをつける
- NoSQL データベース(Cloud Firestore)
- ストレージ(Cloud Storage for Firebase)
- Web アプリの公開(Firebase Hosting)
- アプリ利用状況の解析(Firebase Analytics)

## 事前準備

- Google アカウント

## firebase でプロジェクトを作成

以下に Firebase の Web サイトにアクセス<br>

[https://firebase.google.com/?hl=ja](https://firebase.google.com/?hl=ja)

使ってみる。をクリック。

![Firebaseの設定開始](/image/firebase-setup/firebaseStart.png)<br>

プロジェクトを作成をクリック。

![プロジェクト作成](/image/firebase-setup/firebaseProject.png)<br>

Firebase で管理する際のプロジェクト名を入力。<br>
Vue で作成した際のプロジェクト名を統一するとわかりやすい。<br>
今回は「Petra」と入力しましょう。

![プロジェクト名を入力](/image/firebase-setup/firebaseProjectname.jpeg)<br>

Firebase アナリティクスを設定します。<br>
本番運用した際に、アナリティクスのレポートを確認でき、便利なので、とりあえず有効にしましょう。<br>

![アナリティクス設定](/image/firebase-setup/firebaseAnalytics.png)<br>

アナリティクスの設定を ON にした場合に表示されます。<br>
デフォルトのままプロジェクトを作成しましょう。 <br>

![アナリティクス有効化](/image/firebase-setup/FirebaseAnalyticsAccount.png)<br>

プロジェクトの作成が完了したら、以下画面が表示されます。<br>

![プロジェクト作成完了](/image/firebase-setup/firebaseProjectCompleted.png)<br>
