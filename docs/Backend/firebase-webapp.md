---
prev:
  text: " Firebase 環境構築"
  link: "/Backend/firebase-setup.md"
next:
  text: " FirebaseとWebアプリ連携"
  link: "/Backend/firebase-setup.md"
---

# Vue と Firebase を接続

---

<!-- 更新バージョン -->
<Badge type="info" text="v1.0.0" />
<!-- ドキュメントのカテゴリ -->
<Badge type="tip" text="Firebase" />

---

[[toc]]

## Web アプリ登録

プロジェクトの作成が終わったら、web 専用でプロジェクト作成します。<br>
以下赤枠のウェブを選択します。<br>

![Webアプリ登録](/image/firebase-webapp/firebaseWebapp.png)<br>

アプリのニックネームを今回は「Petra」にしましょう。
Firebase の Hosting すると書かれていますが、今回はチェックを入れてください。

![Webアプリのニックネーム設定](/image/firebase-webapp/appSetup.png)<br>

以下の値が連携の際、特に重要です。<br>
赤枠内の値は Firebase 側がプロジェクトをを識別するために発行した値です。<br>
いつでもコピーできますが、Vue との連携の際に使用するのでどこかにコピーしておきましょう。<br>
また、「npm install firebase」と表示されますが、「npm install firebase --save」のコマンドでインストールをお願いします。<br>

![SDKの利用](/image/firebase-webapp/firebaseSDK.png)<br>

※上記画面を閉じてしまっても以下画像の歯車マークをクリックし、スクロールしていくと確認が可能です。<br>

![SDKの利用](/image/firebase-webapp/firebaseSdkCheck.png)<br>

次に Petra の開発リポジトリ(vue-front)をエディタで開き、ルートディレクトリに「.env」ファイルを作成し、以下にコピーで控えていた情報を入力してしてください。<br>
firebaseConfig の中にある apiKey など漏洩するリスクを防ぐため、.env ファイルに環境変数を記載します。<br>
また、こちらの環境変数は「src/firebase/firebase.js」に紐づきます。<br>

```
VUE_APP_API_KEY="apiKeyの値を入れてください"
VUE_APP_AUTH_DOMAIN="authDomainの値を入れてください"
VUE_APP_PROJECT_ID="projectIdの値を入れてください"
VUE_APP_STORAGE_BUCKET="storageBuketの値を入れてください"
VUE_APP_MESSAGING_SENDER_ID="messagingSenderIdの値を入れてください"
VUE_APP_ID="appIdの値を入れてください"
```

## 連携の確認

Vue と Firebase が連携できているかを確認します。<br>
src/main.ts に「import "./firebase/firebase"; 」が記載されているか確認してください。<br>
記載されていたら、Vue アプリの起動をしてください。<br>
Vue プロジェクト作成時の画面が表示され、console に firebase のエラーなどが特になければ連携成功です！！
