// // 数字→数字：不变
// console.log(Number(123));  // 123

// // 布尔→数字：true=1，false=0
// console.log(Number(true));  // 1
// console.log(Number(false)); // 0

// // 字符串→数字：纯数字字符串转对应数字，非数字字符串转NaN，空字符串是特例
// console.log(Number('456'));   // 456
// console.log(Number('hello')); // NaN（非数字字符串直接翻车）
// console.log(Number(''));      // 0（空字符串是特例）

// // undefined→NaN，null→0（记住这两个特殊规则）
// console.log(Number(undefined)); // NaN
// console.log(Number(null)); // 0


// // 数字→字符串：直接套引号
// console.log(String(789)); // 输出："789"

// // 布尔→字符串：true→"true"，false→"false"
// console.log(String(true)); // 输出："true"
// console.log(String(false)); // 输出："false"

// // undefined/null→固定字符串
// console.log(String(undefined)); // 输出："undefined"
// console.log(String(null)); // 输出："null"


// 假值清单（记死！）
console.log(Boolean(0));   // false
console.log(Boolean(''));  // false
console.log(Boolean(NaN)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(null));  // false
console.log(Boolean(false)); // false

// 其他全是真值
console.log(Boolean(1));     // true
console.log(Boolean(' '));   // true（空格字符串不是空字符串）
console.log(Boolean('abc')); // true