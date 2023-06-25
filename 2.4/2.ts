// 文字列の結合
import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("名前を入力してください。", (name) => {
  console.log("こんにちは" + name + "さん！");
  rl.close();
});

// 片方のオペランドがstringの場合、もう片方のオペランドもstringに変換される
console.log("foo" + true); // footrue
console.log(null + "bar"); // nullbar
