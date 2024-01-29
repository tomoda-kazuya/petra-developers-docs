---
# prev:
#   text: '概要'
#   link: '/Frontend/tips-overview.md'
next:
  text: 'コーディングガイドライン-SCSS'
  link: '/Frontend/coding-guideline-scss.md'
---

# フロントエンドについて

---

<!-- 更新バージョン -->
<Badge type="info" text="v1.0.0" />
<!-- ドキュメントのカテゴリ -->
<Badge type="tip" text="Frontend" />

---

[[toc]]

## vue-frontとは
Petraアプリケーションで表示される画面群になります。
レスポンシブデザインも実装予定でスマホからも閲覧される想定となります。
SPAで作られており、実際にはindex.htmlの中で表示が切り替わっています。
SSRはやっていません。

## 環境構築とstub-server
※前提：node.js(v18系以上)、npmがインストールされていること。<br>
※将来的にnodeのバージョンを上げる可能性があるため、nodebrewやnvm等のnodeバージョン管理ツールを使用してのインストール推奨。<br>
※Windows環境では一部手順が異なります。<br>

1. vue-frontのプロジェクトをクローン<br>
   vue-frontのリポジトリは[こちら](https://github.com/tomoda-kazuya/vue-front)

2. /vue-frontディレクトリで以下コマンド実施（※初回のみ）
   ```shell
   npm install
   ```
3. 以下コマンドでvue-frontを起動
   ```shell
   npm run dev
   ```
~~4. stub-serverを起動~~
<br>※Firebaseを利用するため調整中

::: tip stub-serverについてざっくりと
本物のサーバーの代わりにダミーのデータを返してくれる便利なやつです。<br>
ローカル環境でフロントエンド開発をする際は基本的にこのstub（スタブ）サーバを使います。<br>
フロントの開発進めたい、でもサーバー側の開発がまだできてない、、なんて時に重宝します。
:::

<br>

## 使用技術
Petra開発におけるフロントエンドの使用技術は以下になります。

- 言語： TypeScript
- FW： Vue3系
- スタイルシート：SCSS, Tailwind CSS
- ビルドツール：Vite
- テストツール： e2eテスト、cypress (ユニットテストでVitest入れたいけどいったん保留)
- フォーマッタ：eslint, prettier
- ダイアグラム生成ツール：mermaid.js
- ライブラリ：Pinia, Vue Router, axios

<br>

## vue-frontの構成

/.vscode・・・vscode用の設定ファイル<br>
/cypress・・・e2eテスト関連のファイル<br>
/mermaid・・・画面遷移図等関連ファイル<br>
/public・・・favicon等、画像ファイルやフォントなど<br>
/src・・・基本開発者が触るところ<br>
/stub・・・vue-frontのスタブサーバー<br>

<br>

### ■srcの中身について
assets/・・・scssファイル、util系のjs、enum群<br>
components/・・・pagesで使われる画面部品<br>
modals/・・・モーダルウインドウの中身の部品<br>
pages/・・・基本的にURLを持つページの部品<br>
router/・・・vue-routerの設定<br>
servises/・・・通信関係(axios関連)<br>
stores/・・・pinia関連のファイル<br>
App.vue・・・すべてのコンポーネントの親、共通処理の呼び出しなど<br>
main.js・・・一番最初に呼ばれるjsファイル<br>

<br>

## Visual Studio Codeを使う場合の拡張機能について
下記の拡張機能をVSCode左の拡張機能タブから検索してインストールしてください。

### ■必須
- Vue Language Features (Volar)
- TypeScript Vue Plugin (Volar)
- ESLint

### ■あると便利
- Auto Close Tag
- Auto Rename Tag
- Code Spell Checker
- CSSTree validator
- GitLens
- indent-rainbow
- Path Intellisense
- Trailing Spaces
- vue-peek
- Zenkaku

### ■日本語化
Japanese Language Pack for Visual Studio Code