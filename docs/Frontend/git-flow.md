---
prev:
  text: 'フロントエンドについて'
  link: '/Frontend/petra-frontend.md'
next:
  text: 'vue-frontにおける命名規則'
  link: '/Frontend/vue-front-naming-rule.md'
---

# Gitフローとブランチ運用

---

<!-- 更新バージョン -->
<Badge type="info" text="v1.0.0" />
<!-- ドキュメントのカテゴリ -->
<Badge type="tip" text="Git" />

---

[[toc]]

## git-flowとは
git-flowとはGitにおけるリポジトリの分岐モデルであり、ルールのことを指します<br>
それぞれのブランチを明確に定義し、複数人での開発時にそれぞれが好き勝手にブランチを作成し混乱することを防ぎます。<br>
※詳細なgit-flowの説明については割愛します。

## Petra開発におけるGitフロー

- vue-frontリポジトリをクローンして開発作業を行います。<br>
- featureブランチは画面ごとに切ります。<br>
- 開発作業が終わったらfeatureブランチからdevelopブランチにプルリクエストを出します。
- PR（プルリクエスト）でコードレビューを実施します。
- レビュー完了後、PRがdevelopブランチにマージされたら動作確認(テスト)をします。
- 動作確認で問題なければmainブランチにPRを出してマージします。

| ブランチ | ブランチ作成元 | 概要                                      | ネーミング規約       | 例                     |
| -------- | -------------- | ----------------------------------------- | -------------------- | ---------------------- |
| main     | -              | 本番環境にリリースできる状態              | 変更なし             | -                      |
| develop  | main           | 検証環境<br>mainブランチにマージできる状態| 変更なし             | -                      |
| feature  | develop        | 開発者が作成する開発用ブランチ            | feature/画面名       | feature/loginPage      |

## コミットメッセージの書き方
コミットメッセージは特に厳密な決まりはありませんが、統一しておいた方がメッセージ書きやすいと思うので、いったん以下のように書いてください。
<br>

- 対応内容が変更の場合：`Modify [対応内容]`
- 変更内容が追加の場合：`Add [対応内容]`
- 変更内容が修正の場合：`Fix [対応内容]`

:::info 例
Modify ログインページのフォームの変更<br>
Add ログインページ追加<br>
Fix カードコンポーネントの修正<br>
:::

※めんどくさかったら全部`Modify`でいいです。 :unamused: