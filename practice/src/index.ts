import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("数値を入力してください", (line) => {
  const num = Number(line);
  if (0 <= num && num < 100) {
    console.log(`${num}は0以上100未満です`);
  } else {
    console.log(`${num}は0以上100未満ではありません`);
  }

  if (!Number.isNaN(num)) {
    console.log(num, "はNanではありません");
  }
  rl.close();
});

// ||はデフォルト値を設定するときに使う
rl.question("名前を入力してください", (line) => {
  // lineが空文字の場合、"名無し"を代入する
  const name = line || "名無し";
  console.log(`こんにちは、${name}さん`);
  rl.close();
});
