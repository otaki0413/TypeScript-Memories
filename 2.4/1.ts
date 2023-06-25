// 演算子は式を組み合わせて新しい式を作るための記号
// 演算子の構成要素となる式をオペランドと呼ぶ

//  2項演算子
const addResult = 1024 + 314 + 500;
console.log(addResult); // 1838
const discounted = addResult * 0.7;
console.log(discounted); // 1286.6

const sqrt2 = 2 ** 0.5;
console.log(sqrt2); // 1.4142135623730951

console.log(18 / 12);
console.log(18n / 12n);
console.log(18 % 12);
console.log(18n % 12n);

const res1 = 5 - 1.86; // number
const res2 = 2n ** 5n; // bigint

// 演算子の優先順位
console.log(5 - 3 - 1); // 1
console.log(5 - 3 - 1); // 1
console.log(5 - (3 - 1)); // 3

// 単項演算子
const x = 123;
const y = 10n;
const minusx = -x; // number型
const minusy = -y; // bigint型
console.log(minusx); // -123
console.log(minusy); // -10n

const str: string = "123";
console.log(+str * 100); // strは文字列だが、+演算子により数値に変換される

// インクリメント・デクリメント演算子
let foo = 10;
console.log(foo); // 10
foo++;
console.log(foo); // 11
--foo;
console.log(foo); // 10

let bar = 10;
console.log(++bar); // 11
console.log(bar--); // 11
