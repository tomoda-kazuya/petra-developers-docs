---
prev:
  text: "FirebaseとWEBアプリ連携"
  link: "/Backend/firebase-webapp.md"
next:
  text: "認証機能の設定"
  link: "/Backend/firebase-authentication.md"
---

# Firebase Hosting

---

<!-- 更新バージョン -->
<Badge type="info" text="v1.0.1" />
<!-- ドキュメントのカテゴリ -->
<Badge type="tip" text="Firebase" />

---

[[toc]]

## Firebase Hosting とは

Firebase Hosting は簡単にデプロイすることが可能です。<br>
本来、公開するにはサーバー・ドメインの契約が必要ですが、Firebase Hosting を利用することで、サーバー・ドメインを契約していなくても簡単に公開できます。<br>

## Firebase Hosting 初期設定

1. 「始める」ボタンを押下

![Firebase Hosting START](/image/firebase-hosting/firebaseHostingStart.jpeg)<br>

2. Firebase CLI のインストール

![Firebase CLI Install](/image/firebase-hosting/firebaseCLI.jpeg)<br>

3. Firebase へのログイン

以下を実行する。<br>

```
firebase login
```

CLI の使用状況とエラー報告情報を収集できるようにするか聞かれるので、「Y」を選択する。<br>

```
i  Firebase optionally collects CLI usage and error reporting information to help improve our products. Data is collected in accordance with Google's privacy policy (https://policies.google.com/privacy) and is not used to identify you.

? Allow Firebase to collect CLI usage and error reporting information? (Y/n)
```

入力すると、ブラウザが立ち上がって Google アカウントへのアクセスの要求をされます。<br>
Firebase のプロジェクトを作る Google アカウントを選択します。<br>
以下画像の通り進めてください。<br>

![Firebase CLI Install](/image/firebase-hosting/firebaseCliSelect.png)<br>
![Firebase CLI Install](/image/firebase-hosting/firebaseCliRequest.png)<br>
![Firebase CLI Install](/image/firebase-hosting/firebaseCliSuccess.png)<br>

コンソールにも、下記のような `Success!`の文言が出ているかと思います。<br>

```
Visit this URL on this device to log in:
https://accounts.google.com/(中略)
Waiting for authentication...

+  Success! Logged in as ***@gmail.com
```

4. Firebase の初期化

プロジェクトを Firebase プロジェクトとして、初期化しましょう！<br>
以下コマンドを実行。

```
firebase init
```

プロジェクトを初期化していいか聞かれます。（勿論 yes で！）<br>

```
     ######## #### ########  ######## ########     ###     ######  ########
     ##        ##  ##     ## ##       ##     ##  ##   ##  ##       ##
     ######    ##  ########  ######   ########  #########  ######  ######
     ##        ##  ##    ##  ##       ##     ## ##     ##       ## ##
     ##       #### ##     ## ######## ########  ##     ##  ######  ########

You're about to initialize a Firebase project in this directory:

  C:\Users\username\Desktop\deploy

? Are you ready to proceed? (Y/n)
```

どの Firebase CLI 機能を設定するか選択します。<br>
今回は以下を選択してください。<br>
スペースキーで複数選択し、Enter キー押下で次へ<br>

- Firestore
- Hosting
- Storage

```
? Which Firebase CLI features do you want to set up for this folder? Press Space to select features, then Enter to confirm your choices.
 ◯ Database: Deploy Firebase Realtime Database Rules
 ◉  Firestore: Deploy rules and create indexes for Firestore
 ◯ Functions: Configure and deploy Cloud Functions
❯◉ Hosting: Configure and deploy Firebase Hosting sites
 ◉  Storage: Deploy Cloud Storage security rules
 ◯ Emulators: Set up local emulators for Firebase features
 ◯ Remote Config: Get, deploy, and rollback configurations for Remote Config
```

対象の Firebase のサイト側で作成したプロジェクトを選択します。<br>
既存のプロジェクトを使うので「`Use an existing project`」を選択。<br>

```
=== Project Setup

First, let's associate this project directory with a Firebase project.
You can create multiple project aliases by running firebase use --add,
but for now we'll just set up a default project.

? Please select an option: (Use arrow keys)
> Use an existing project
  Create a new project
  Add Firebase to an existing Google Cloud Platform project
  Don't set up a default project
```

Firebase のサイト側で作成した「`Petra`」を選んで下さい。<br>

```
? Please select an option: Use an existing project
? Select a default Firebase project for this directory: (Use arrow keys)
> Petra-5732d (my-first-deploy)
  sample-project01-9cf12 (sample-project01)
  sample-project02 (sample-project02)
  sample-project03-96663 (sample-project03)
(Move up and down to reveal more choices)
```

デプロイするディレクトリを選択します。デフォルトの public ディレクトリを使用するので、そのまま Enter キー押下。<br>

```
=== Hosting Setup

Your public directory is the folder (relative to your project directory) that
will contain Hosting assets to be uploaded with firebase deploy. If you
have a build process for your assets, use your build's output directory.

? What do you want to use as your public directory? (public)
```

SPA として設定するかを選択できます。<br>
何かしらフレームワークを使っていれば別ですが、基本は `No` でいいと思います。<br>

```
? Configure as a single-page app (rewrite all urls to /index.html)? (y/N)
```

既に存在している index.html を上書きするか選択できます。<br>
当然 `No` です。上書き、ダメ、ゼッタイ。<br>

```
+  Wrote public/404.html
? File public/index.html already exists. Overwrite? (y/N)
i  Skipping write of public/index.html

i  Writing configuration info to firebase.json...
i  Writing project information to .firebaserc...
i  Writing gitignore file to .gitignore...

+  Firebase initialization complete!
```

## デプロイテスト

1. デプロイファイルを確認

public フォルダの中の index.html がデプロイされるため、必要な場合はファイル構成を変更しましょう。

2. デプロイ

では、実際にデプロイをしてみましょう。<br>
デプロイをするときは以下のコマンドを叩きます。<br>

```
$ firebase deploy
```

以下のように表示されれば、デプロイ成功です！<br>
Hosting URL にアクセスして、実際の画面を確認してください。<br>

```
=== Deploying to 'landing-page-temp-1223'...

i  deploying hosting
i  hosting[landing-page-temp-1223]: beginning deploy...
i  hosting[landing-page-temp-1223]: found 2 files in public
✔  hosting[landing-page-temp-1223]: file upload complete
i  hosting[landing-page-temp-1223]: finalizing version...
✔  hosting[landing-page-temp-1223]: version finalized
i  hosting[landing-page-temp-1223]: releasing new version...
✔  hosting[landing-page-temp-1223]: release complete

✔  Deploy complete!

Project Console: https://console.firebase.google.com/project/landing-page-temp-1223/overview
Hosting URL: https://landing-page-temp-1223.web.app
```

3. デプロイをやめる

```
firebase hosting:disable
```
