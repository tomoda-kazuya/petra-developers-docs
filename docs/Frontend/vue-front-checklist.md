---
prev:
  text: 'Gitフローとブランチ運用について'
  link: '/Frontend/git-flow.md'
next: false
#   text: ''
#   link: ''
---

# 実装時のセルフチェックリスト

---

<!-- 更新バージョン -->
<Badge type="info" text="v1.0.0" />
<!-- ドキュメントのカテゴリ -->
<Badge type="tip" text="Frontend" />

---

[[toc]]

## チェックリストの使い方
こちらのチェックリストはvue-frontのコードレビュー時の観点になります。<br>
プルリクエスト前に下記チェックリストを確認してセルフチェックを実施してください。

## JavaScript/Vue.js
|No.| 確認内容                                                                                                            | :white_check_mark:      |
|:-:|---------------------------------------------------------------------------------------------------------------------|:-----------------------:|
|1  |変数を`var`で定義しているものはないか<br>基本的には`const`を利用する。やむを得ず代入の処理が必要な場合のみ`let`を使う| <input type="checkbox"> |
|2  |フォーマットが正しくされているか（インデントずれなどはないか）| <input type="checkbox"> |
|3  |変更のない箇所のフォーマットがかわっているところはないか<br>※既存のフォーマット揺れを修正するのはOK| <input type="checkbox"> |
|4  |data定義した初期値に問題ないか（`undefined` `null` `空文字`など）| <input type="checkbox"> |
|5  |モジュールを読み込むときに`import`を使用しているか<br>`require`はNG（古い書き方なので動作しない可能性がある）| <input type="checkbox"> |
|6  |`v-for`を使用する際は、ユニークキーを`key`に指定しているか<br>※複合ユニークキーでも可、`index`は使用しない| <input type="checkbox"> |
|7  | DOM上（`v-if`の条件等）で式を使用しているところはないか<br>※booleanで返す`computed`（もしくは`method`）を定義するのが良い<br>※v-if="isAdmin && isAdmin2"程度であれば可| <input type="checkbox"> |
|8  |API通信を行うメソッドは非同期（`Async`/`Await`/`Promise`）となっているか<br>基本的にはAsync関数内で`try-catch文`で記載する。<br>複数APIを同時に実行したい場合は`await Promise.all()`を使う<br>`Promise`,`then`のメソッドチェーンは使用しない| <input type="checkbox"> |
|9  |複数コンポーネント構成の画面で、１コンポーネントでしかレスポンスが使われないAPIを親コンポーネントで呼んでいないか<br>※レスポンスを使用するコンポーネント内でAPIを呼ぶ<br>※コンポーネント間のデータの受け渡しが発生しない、並列処理になるなどのメリットがあるため| <input type="checkbox"> |
|10  |APIレスポンスで`value`が`null`、`空文字`で返ってくる可能性のある項目について考慮されているか<br>※画面表示が`null`や`空欄`になってしまうようなことはないか| <input type="checkbox"> |
|11 |`Boolean型`の変数や`Computed`の名称は`Boolean`だと判別できるものになっているか<br>`is〇〇`/`can〇〇`/`has〇〇`等になっているか| <input type="checkbox"> |
|12  |複数画面で共通的に使われる項目を使った条件式の`Computed`名が他画面と揃っているか| <input type="checkbox"> |
|13  |画面表示用にフォーマットをかける、文字列結合等した値を返す`computed`,`method`名は`disp〇〇`となっているか| <input type="checkbox"> |
|14  |一つのメソッドの処理内容が長くなりすぎていないか（処理ごとにメソッドが分かれているか）| <input type="checkbox"> |
|15  |`get〇〇`のようなメソッドでは`return値`を持っているか| <input type="checkbox"> |
|16  |`set〇〇`のようなメソッドでは値をセットする以外の処理が多数含まれていないか| <input type="checkbox"> |
|17  |保持したストア情報は関係ない画面に遷移した際にクリアされているか| <input type="checkbox"> |
|18  |使用されていない`data`、`method`、`computed`がないか| <input type="checkbox"> |
|19  |親子画面間（子が`一つ`）のデータの受け渡しは`store`ではなく`props`を使用しているか| <input type="checkbox"> |
|20  |親子画面間（子が`複数`）のデータの受け渡しは`store`を使用しているか| <input type="checkbox"> |
|21  |子コンポーネントで`props`の定義記述する際は`require属性`を記述しているか<br>また`required: false`の場合は、`default値`を指定しているか| <input type="checkbox"> |
|22  |ローディング状態の制御は正しいか<br>二度押し不可の制御が入っていない、エラー時にローディングが解除されないなど| <input type="checkbox"> |
|23  |不必要なマジックナンバー、マジックストリングがないか<br>値が変わることが想定されないもの(`ハイフン`、`空文字`など)は許容| <input type="checkbox"> |
|24  |全角スペース、半角スペースはないか<br>`&emsp;`などを使う| <input type="checkbox"> |
|25  |モーダル画面は枠外クリック可否が設計通りになっているか| <input type="checkbox"> |
|26  |入力項目がある画面では画面離脱確認モーダルの実装が入っているか| <input type="checkbox"> |
|27  |１文字の変数が使用されていないか（`for文`の`index`程度であれば可）| <input type="checkbox"> |
|28  |新規Vueファイルを作成する場合、ファイル名は`複数単語のケバブケース`になっているか（`1単語.vue`はNG）<br>※src/pages配下のvueファイルで子コンポーネントを積む前提の親ファイルの命名は`XXX-base.vue`のようにすると良い、index.vueはわかりにくいので非推奨| <input type="checkbox"> |
|29  |`三項演算子`や`lodash`を活用して行数を削減したコードになっているか<br>※`lodash`を使う場合は使うメソッドだけ`import`する| <input type="checkbox"> |

## HTML

|No.| 確認内容                                                                                                            | :white_check_mark:      |
|:-:|---------------------------------------------------------------------------------------------------------------------|:-----------------------:|
|1  |インデントずれはないか| <input type="checkbox"> |
|2  |非入力項目で`formタグ`を使用していないか| <input type="checkbox"> |
|3  |`style`を直接記述していないか| <input type="checkbox"> |
|4  |`brタグ`を使用していないか<br>必須ではないが極力`pタグを使用する` または `cssで制御する`| <input type="checkbox"> |


## CSS

|No.| 確認内容                                                                                                            | :white_check_mark:      |
|:-:|---------------------------------------------------------------------------------------------------------------------|:-----------------------:|
|1  |`デスクトップ`表示、`スマホ`表示がそれぞれ設計通りの表示になるか| <input type="checkbox"> |
|2  |`id`名、`class`名が複数単語の場合ケバブケースになっているか| <input type="checkbox"> |
|3  |`id`名、`class`名に具体的な色、数値が含まれていないものになっているか| <input type="checkbox"> |
|4  |各ルールの間に一行改行が入っているか| <input type="checkbox"> |
|5  |ルールの階層がわかるようにインデントされているか| <input type="checkbox"> |
|6  |プロパティの記述順が`アルファベット`順になっているか<br>担当者ごとの記述差異をなくすため（コンフリクト予防）| <input type="checkbox"> |
|7  |px値を指定する場合、`８`の倍数になっているか(デザイン的な観点)<br>※難しければ４の倍数でも可| <input type="checkbox"> |
|8  |色指定をする場合、変数化されているか（`_colors.scss`に定義する）| <input type="checkbox"> |
|9  |色指定は６桁の`カラーコード`を使用しているか| <input type="checkbox"> |
|10 |フォントサイズを指定する場合は、単位には`rem`を使用しているか| <input type="checkbox"> |
|11 |`タイプセレクタ`を使用する場合は、適用される範囲を限定したうえで使用しているか| <input type="checkbox"> |
|12 |`!important`を使用していないか| <input type="checkbox"> |
|13 |`ショートハンドプロパティ`を使用できるところでは使用しているか| <input type="checkbox"> |