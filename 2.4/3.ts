const left1 = -5,
  right1 = 0;
console.log(left1 < right1); // true

const left2 = 100n,
  right2 = 50n;
console.log(left2 >= right2); // true

const left3 = -10,
  right3 = 0;
console.log(left3 > right3); // false

const left4 = 12n,
  right4 = 8n;
console.log(left4 <= right4); // false

console.log("apple" < "orange"); // true

// 一致判定
const left: number = 1;
const right: number = 2;
console.log(left === right); // false
console.log(left !== right); // true

// 型の一致判定
const str: any = "3";
console.log(str == 3); // 文字列が数値に変換されるのでtrue
console.log(str === 3); // false

// ==を使ってもいい場面
x == null; // xがnullまたはundefinedの場合にtrue
x === null; // xがnullの場合にtrue
x === undefined; // xがundefinedの場合にtrue
