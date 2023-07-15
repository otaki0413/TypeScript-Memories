// 論理演算子
const t = true,
  f = false;

console.log(t && t); // true
console.log(t && f); // false
console.log(f && f); // false

console.log(t || t); // true
console.log(t || f); // true
console.log(f || f); // false

// !!の使用例
// !!は否定の否定であるため、trueになる
const input1 = "123",
  input2 = "";

const input1IsNotEmpty = !!input1;
console.log(input1IsNotEmpty); // true
const input2IsNotEmpty = !!input2;
console.log(input2IsNotEmpty); // false

// 短絡評価とは
// 左辺がfalseなら右辺を評価せずに左辺を評価する
// 左辺がtrueなら右辺を評価する
// xが真偽値変換したとき、trueならyを返す。falseならxを返す
x && y;
100 && 2; // 2
"0" && "テスト"; // テスト
0 && "おはよう"; // 0
"" && "こんにちは"; // ""

// ??は左辺がnullまたはundefinedなら右辺を返す、それ以外なら左辺を返す
// ?? と || の違い
// ||は空文字や0もfalseとして扱うが、??は空文字や0もtrueとして扱う
null ?? "デフォルト値"; // デフォルト値
undefined ?? "デフォルト値"; // デフォルト値
"" ?? "デフォルト値"; // ""
