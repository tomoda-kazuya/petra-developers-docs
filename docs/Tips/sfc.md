---
prev:
  text: 'Vue.js基礎'
  link: '/Tips/vue-basic.md'
# next:
#   text: 'タイトル'
#   link: '/Tips/ファイル名'
---

# 単一ファイルコンポーネント(Single File Components)

---

<!-- 更新バージョン -->
<Badge type="info" text="v1.0.0" />
<!-- ドキュメントのカテゴリ -->
<Badge type="tip" text="Vue" />

---

[[toc]]

## 単一ファイルコンポーネントとは
`Vue 単一ファイルコンポーネント`（別名 *.vue ファイル、 `SFC` と略記）は、Vue コンポーネントの`テンプレート`、`ロジック`、 および `スタイル`を 1 つのファイルにカプセル化できる`特別なファイル形式`です。

<br>

簡単に言えば、単一ファイルコンポーネントは`HTML`に加え`javascript`、`css`を一括りに設定したファイルとなります。

`SFC`のメリットとしては、コードを修正するために、関連したファイル間を行ったり来たりする必要が少なくなるので、`保守性`に優れ、`グローバル変数`による名前空間の汚染問題を解消できたりします。

<br>

## 単一ファイルコンポーネントの仕様
単一ファイルコンポーネントは`template`、`script`、`style`の３つのブロックから構成されています。

```vue
<template>
  <!-- 主にhtmlで記述 -->
</template>

<script>
// 主にjavascriptで記述
</script>

<style>
/* 主にcssで記述 */
</style>
```

### template
templateオプションに対応するブロック

主な仕様言語:`HTML`

`マスタッシュ記法`や`ディレクティブ`などの文法がそのまま使えます。

<br>

### script
UIの振る舞いを制御するブロック

主な仕様言語:`JavaScript`

scriptタグはファイル内に最大で`１つ`です。<br>
他のコンポーネントをインポートするには`import構文`を利用できます。
```vue
<script>
import MyPage from 'my-page'
</script>
```

<br>

### style
UIの見た目を制御するブロック

主な仕様言語:`css`

１つのファイルに`複数のタグ`を仕様でき、ファイル毎にスタイルを`カプセル化`できます。<br>
これによりスタイル定義の干渉を回避できます。

スタイルを現在のコンポーネントにカプセル化するため、style タグに `scoped` または `module` 属性を指定できます同じコンポーネント内に、異なるカプセル化モードを持つ複数の styleタグを混在させることができます。

<br>

::: tip
詳しい公式ドキュメント[SFCのスタイル機能](https://ja.vuejs.org/api/sfc-css-features.html)を参照
:::

<br>

```vue
<!-- カプセル化 -->
<style scoped>
  .message {
    color: red;
  }
</style>

<style module>
  .red {
  color: red;
 }
</style>

<!-- グローバル化 -->
<style>
  .theme {
    color: blue;
  }
</style>
```

<br>

### 自動名前推論​
SFC は以下の場合、コンポーネントの名前をファイル名から`自動的`に`推論`します

- 開発時の警告フォーマット
- DevTools の inspection
- 再帰的な自己参照<br>例えば FooBar.vue という名前のファイルは、そのテンプレート内で自分自身を
  ```vue
  <FooBar/>
  ```
  として参照できます。これは、明示的に登録/インポートされたコンポーネントよりも優先順位が低くなります。

<br>

### プリプロセッサ
ブロックに `lang` 属性を使ってプリプロセッサの言語を宣言できます。最も一般的なケースは、`script` ブロックでの `TypeScript` の使用です。

```vue
<script lang="ts">
  // TypeScript を使う
</script>
```

`lang` はどのブロックにも適用できます - 例えば、styleブロック で `Sass` を使用したり、templateブロック で `Pug` を使用できます:

```vue
<template lang="pug">
p {{ msg }}
</template>
``` 

```vue
<style lang="scss">
  $primary-color: #333;
  body {
    color: $primary-color;
  }
</style>
```

<br>


### src でのインポート​
*.vue コンポーネントを複数のファイルに分割したい場合は、`src` 属性を使用して言語ブロックに`外部ファイル`を`インポート`できます:

```vue
<template src="./template.html"></template>
<style src="./style.css"></style>
<script src="./script.js"></script>
```

src でのインポートは webpack のモジュールリクエストと同じパス解決ルールに従うので注意してください。<br>
つまり、相対パスは` ./ `で始める必要があります
`npm`の依存関係からリソースをインポートできます

```vue
<!-- インストール済みの "todomvc-app-css" npm パッケージからファイルをインポート -->
<style src="todomvc-app-css/index.css" />
```

<br>

### コメント​
各ブロックの中では、使用されている言語（HTML、CSS、JavaScript、Pug など）の`コメント構文`を使用する必要があります。トップレベルのコメントには、HTML のコメント構文を使用します: 
```html
<!-- コメント内容をここに -->
```
