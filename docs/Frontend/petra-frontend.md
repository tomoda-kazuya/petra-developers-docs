---
# prev:
#   text: ''
#   link: ''
next:
  text: 'Gitフローとブランチ運用について'
  link: '/Frontend/git-flow.md'
---

# フロントエンドについて

---

<!-- 更新バージョン -->
<Badge type="info" text="v1.0.1" />
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

:::info Petra開発用リポジトリ
vue-frontのリポジトリは[こちら](https://github.com/tomoda-kazuya/vue-front)
:::
1. vue-frontのリポジトリを`fork`<br>
   1.1 Githubのvue~frontリポジトリページのforkをクリック
   ![fork-process-1](/image/petra-frontend/fork-process-1.png)<br>

   1.2 自分のGitHubアカウントを設定して、`Create Fork`ボタンを押下
   ![fork-process-2](/image/petra-frontend/fork-process-2.png)<br>

::: warning
GitHubの画面は変わる可能性があるため、<br>上記画像と画面が異なる場合はForkの手順を調べて対応してください。
:::
<br>

2. fork先のvue-frontプロジェクトを`clone`<br>

3. fork元のリポジトリを`upstream`に設定<br>

   3.1 cloneしたプロジェクト直下で以下コマンドを実行
   ``` shell
   git remote -v
   ```

   実行結果
   ```shell
   origin	https://github.com/{自分のGitHubのアカウント名}/vue-front.git (fetch)
   origin	https://github.com/{自分のGitHubのアカウント名}/vue-front.git (push)
   ```

   <br>

   3.2 実行結果が確認できたら、以下コマンドを実行
   ```shell
   git remote add upstream https://github.com/tomoda-kazuya/vue-front.git 
   ```

   <br>

   3.3 再度、3.1で実行したコマンドを実行し、<br>正しくリモートリポジトリの新規接続の作成がされているかを確認<br>

   実行結果
   ```shell
   origin	https://github.com/{自分のGitHubのアカウント名}/vue-front.git (fetch)
   origin	https://github.com/{自分のGitHubのアカウント名}/vue-front.git (push)
   upstream	https://github.com/tomoda-kazuya/vue-front.git (fetch)
   upstream	https://github.com/tomoda-kazuya/vue-front.git (push)
   ```
   3.4 upstreamにfork元のリポジトリが設定されていればOK<br>

::: tip 3. で使用したGitコマンドの説明
`git remote -v`・・・リモート接続の一覧を表示するコマンド<br>
`git remote add <name> <url>`・・・リモート リポジトリに対する新規接続を作成するコマンド
:::

<br>

4. /vue-frontディレクトリで以下コマンド実施（※初回のみ）
   ```shell
   npm install
   ```

<br>

5. 以下コマンドでvue-frontを起動
   ```shell
   npm run dev
   ```

<br>

~~6. stub-serverを起動~~
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