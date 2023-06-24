const str1: string = "hello";
const str2: string = "world";
console.log(`${str1}, ${str2}`);

// テンプレートリテラルは ${式} という構文で式の値を文字列の構成に使用可能

console.log(`123 + 456 =  ${123 + 456}`); // 123 + 456 =  579

// 改行を表すエスケープシーケンス \n
console.log("Hello \nWorld");

// タブ文字を表すエスケープシーケンス \t
console.log("Hello \tWorld");

// バックスラッシュを文字列に含める書き方 \\
console.log("Hello \\World");
