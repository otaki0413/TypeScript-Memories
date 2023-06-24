import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("文字列を入力してください。", (line) => {
  console.log(`${line}が入力されました。`);
  rl.close();
});

// 暗黙的な型推論
rl.question("数値を入力してください。", (line) => {
  // resultはstring型に推論される
  const result = line + 1000;
  console.log(result);
  rl.close();
});

// 明示的な変換
rl.question("数値を入力してください。", (line) => {
  // resultはnumber型に明示的に変換される
  const result = Number(line) + 1000;
  console.log(result);
  rl.close();
});

// さまざまな値を数値に変換する
const num1 = Number(true);
console.log(num1); // 1
const num2 = Number(false);
console.log(num2); // 0
const num3 = Number(null);
console.log(num3); // 0
const num4 = Number(undefined);
console.log(num4); // NaN

// さまざまな値を文字列に変換する
const str1 = String(true);
console.log(str1); // "true"
const str2 = String(null);
console.log(str2); // "null"
const str3 = String(undefined);
console.log(str3); // "undefined"

// さまざまな値を真偽値に変換する
const bool1 = Boolean(1);
console.log(bool1); // true
const bool2 = Boolean(0);
console.log(bool2); // false
const bool3 = Boolean("hello");
console.log(bool3); // true
const bool4 = Boolean("");
console.log(bool4); // false
const bool5 = Boolean(null);
console.log(bool5); // false
const bool6 = Boolean(undefined);
console.log(bool6); // false
