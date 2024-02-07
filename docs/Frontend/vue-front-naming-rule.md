---
prev:
  text: 'Gitフローとブランチ運用'
  link: '/Frontend/git-flow.md'
next:
  text: 'コーディング規約-SCSS'
  link: '/Frontend/coding-guideline-scss.md'
---

# vue-frontにおける命名規則

---

<!-- 更新バージョン -->
<Badge type="info" text="v1.0.0" />
<!-- ドキュメントのカテゴリ -->
<Badge type="tip" text="Frontend" />

---

[[toc]]

## 使用箇所による文字列の記法

| ケース名 | 複数単語 | 単一単語 | vue-frontでの使用箇所 |
|:-:|:-:|:-:|:-:|
| キャメルケース<br>（ローワーキャメルケース） | lowerCamelCase | case | 変数名・メソッド名等 |
| パスカルケース<br>（アッパーキャメルケース） | UpperCamelCase | Case | 内部jsやコンポーネントの<br>インポート等 |
| ケバブケース | kebab-case | case | v-bindのプロパティ名、<br>HTMLカスタムタグ、<br>クラスセレクタ名等 |
| スネークケース | snake_case | case | 使用しない |
| アッパースネークケース | UPPER_SNAKE_CASE | CASE | vueインスタンス外の<br>定数名等 |

<br>

## 変数、computed、method等の命名について
以下は一例、原則として意味が伝わる命名をすること

### 1. 文字列を返すもの
使用する単語は基本的にレスポンス名に合わせる

| 文字列 | 命名 | 備考 |
|-|-|-|
| フォーマットされた住所 | formattedAddress |  |
| 画面表示用にフォーマットされた住所 | dispAddress | 表示用に整形したdisp~とすること |
| 全選択チェックボックス | checkboxToCheckAll |  |
| 読み込んだ画像データ | readImgFileData | readは過去分詞（レッド） |

<br>

### 2. 数値を返すもの
vue-frontでは数値を文字列として扱う場合が多いため、数値として扱う場合は明記する

| 文字列 | 命名 | 備考 |
|-|-|-|
| 図書の金額 | intBooksAmount |  |
| 一覧の総件数 | totalListItemCount | countはレスポンスでも数値型として扱われることが多い |

<br>

### 3. 真偽値を返すもの

| 文字列 | 命名 | 備考 |
|-|-|-|
| 登録情報を編集可能かどうか | canRegisterdInfomation |  |
| 〇〇する権限を持っているか | hasAuthorityTo〇〇 | 〇〇は動詞の原型 |
| 編集状態を選んでいるかどうか | isSelectingEdit〇〇 | 〇〇＝「何を」があるとわかりやすい。<br>選択しようとしているという意味合い |

<br>

### 4. 処理

| 文字列 | 命名 | 備考 |
|-|-|-|
| 〇〇に入力値を設定する| set〇〇InputValue |  |
| 新しい図書を登録する | registerNewBooks | registという単語が使われているのをよく見るが、これはNG（そんな単語はない） |
| 貸出期間を更新する | updateRentalPeriod | 1ヶ月更新する、ならupdateRentalPeriodFor1Monthとしても良い |

