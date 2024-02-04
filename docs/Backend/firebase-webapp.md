---
prev:
  text: " Firebase 環境構築"
  link: "/Backend/firebase-setup.md"
next: false
#   text: ""
#   link: ""
---

# FirebaseとWEBアプリ連携

---

<!-- 更新バージョン -->
<Badge type="info" text="v1.0.1" />
<!-- ドキュメントのカテゴリ -->
<Badge type="tip" text="Firebase" />

---

[[toc]]

## WEBアプリケーション登録手順

1. Firebaseのプロジェクト作成が終わったら、WEB専用でプロジェクト登録を実施<br>
以下、赤枠のウェブを選択<br>

![WEBアプリケーション登録](/image/firebase-webapp/firebaseWebapp.png)<br>

<br>

2. アプリのニックネームを「`Petra`」に設定（ニックネームは任意）<br>
`このアプリのFirebase Hosting も設定する`にチェックを入れる:white_check_mark:

![WEBアプリのニックネーム設定](/image/firebase-webapp/appSetup.png)<br>

<br>

3. firebaseConfigをコピーする<br>
赤枠内の値（`firebaseConfig`） は Firebase 側でプロジェクトを識別するために発行した値<br>

::: tip 赤枠内の値（`firebaseConfig`）
いつでもコピーできますが、Vue アプリケーションとの連携時に使用するため、保存しておくと良い<br>
:::

<br>

4. npm installの実施<br>
また、画面上のコマンドは「`npm install firebase`」と表示されますが、「`npm install firebase --save`」のコマンドでインストール<br>

```js
npm install firebase  // [!code --]
npm install firebase --save  // [!code ++]
```

![SDKの利用](/image/firebase-webapp/firebaseSDK.png)<br>

::: tip
上記画面を閉じてしまった場合は、以下画像の歯車マークをクリックし、スクロールしていくと確認が可能<br>
:::

![SDKの利用](/image/firebase-webapp/firebaseSdkCheck.png)<br>

5. vue-frontのルートディレクトリに「.env」ファイルを作成し、3. で控えた`firebaseConfig`情報を入力<br>
<br>
Petra 開発フロントエンドリポジトリ(vue-front)をエディタで開き、ルートディレクトリに「`.env`」ファイルを作成し、以下にコピーで控えていた情報を入力する<br>
firebaseConfig の中にある apiKey など漏洩するリスクを防ぐため、`.env` ファイルに`環境変数`を記載します。<br>
また、こちらの環境変数は「`src/firebase/firebase.js`」に紐づきます。<br>

```js
VUE_APP_API_KEY="apiKeyの値を入れてください"
VUE_APP_AUTH_DOMAIN="authDomainの値を入れてください"
VUE_APP_PROJECT_ID="projectIdの値を入れてください"
VUE_APP_STORAGE_BUCKET="storageBuketの値を入れてください"
VUE_APP_MESSAGING_SENDER_ID="messagingSenderIdの値を入れてください"
VUE_APP_ID="appIdの値を入れてください"
```

<br>

## 連携の確認

Vueアプリケーション と Firebase が連携できているかを確認します。<br>
`src/main.ts` に以下が記載されているか確認<br>
```js
import "./firebase/firebase";
```
記載されていたら、Vue アプリの起動実施<br>
Vue プロジェクトの画面が表示され、`console` に firebase のエラーなどが特になければ連携成功となります:tada: :100:
