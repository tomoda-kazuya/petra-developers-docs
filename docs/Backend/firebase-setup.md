---
# prev:
#   text: ""
#   link: ""
next:
  text: "FirebaseとWEBアプリ連携"
  link: "/Backend/firebase-webapp.md"
---

# Firebase 環境構築

---

<!-- 更新バージョン -->
<Badge type="info" text="v1.0.1" />
<!-- ドキュメントのカテゴリ -->
<Badge type="tip" text="Firebase" />

---

[[toc]]

## Firebase とは

Google が提供しているモバイルおよび`WEBアプリケーションのバックエンド処理の開発プラットフォーム`です。<br>
`Firebase` を活用することで、`ユーザー認証`、`データベースの保存`、`サイトの公開`、`サイト分析`などのWEBアプリケーションのバックエンドの機能を簡単に実装できます。 <br>
Firebase は無料のプランから使用できるため、個人でも利用しやすく高い人気を誇っています。

## Petra 開発における Firebase

Petra 開発では以下の箇所で Firebase のサービスを使います。

<!-- TODO:以下の内容は Tips にサービスの概要を書いて、そこへのリンクをつける -->

- ユーザー認証機能・・・・・`Firebase Authentication`
- NoSQL データベース・・・・`Cloud FireStore`
- ストレージ・・・・・・・・`Cloud Storage for Firebase`
- Web アプリの公開・・・・・`Firebase Hosting`
- アプリ利用状況の解析・・・`Firebase Analytics`

## 事前準備

- Google アカウント

## Firebaseプロジェクト作成手順

1. Firebase の WEB サイトにアクセス

::: info FirebaseのWEBサイトは[こちら](https://firebase.google.com/?hl=ja)
:::

<br>

2. 「使ってみる」ボタンを押下

![Firebaseの設定開始](/image/firebase-setup/firebaseStart.png)<br>

<br>

3. 「プロジェクトを作成」ボタンを押下

![プロジェクト作成](/image/firebase-setup/firebaseProject.png)<br>

<br>

4. Firebase のプロジェクト名を入力<br>
<br>
Vue で作成したプロジェクト名と統一するとわかりやすいため、<br>
「`petra-backend`」と入力する（プロジェクト名は任意）

![プロジェクト名を入力](/image/firebase-setup/firebaseProjectname.jpeg)<br>

<br>

5. Firebase アナリティクスを設定します。<br>
本番運用の際に、アナリティクスのレポートを確認できるため、有効にする<br>

![アナリティクス設定](/image/firebase-setup/firebaseAnalytics.png)<br>

以下画面はアナリティクスの設定を `ON` にした場合に表示されます<br>
デフォルトのまま「プロジェクトを作成」ボタンを押下 <br>

![アナリティクス有効化](/image/firebase-setup/FirebaseAnalyticsAccount.png)<br>

以下画面が表示されたらプロジェクトの作成完了<br>

![プロジェクト作成完了](/image/firebase-setup/firebaseProjectCompleted.png)<br>
