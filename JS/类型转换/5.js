// // 空对象转布尔
// console.log(Boolean({})); // true

// // 空数组转布尔
// console.log(Boolean([])); // true

// // 有属性的对象转布尔
// console.log(Boolean({ name: '张三' })); // true

// // 有元素的数组转布尔
// console.log(Boolean([1, 2, 3])); // true


// // 案例1：数组[]转数字
// const arr = [];
// // 第一步：arr.valueOf() → 返回数组本身（[]，还是引用类型）
// // 第二步：调用arr.toString() → 空数组toString()返回""（空字符串，原始值）
// // 第三步：ToNumber("") → 0
// // 最终结果：[]转数字是0
// console.log(Number([])); // 0
// console.log([] == 0); // true（因为[]转数字0，和右边0相等）

// // 案例2：数组[1,2]转数字
// const arr2 = [1,2];
// // arr2.valueOf() → [1,2]（引用类型）
// // arr2.toString() → "1,2"（字符串）
// // ToNumber("1,2") → NaN（非纯数字字符串）
// console.log(Number([1,2])); // NaN

// // 案例3：对象{}转数字
// const obj = {};
// // obj.valueOf() → {}（引用类型）
// // obj.toString() → "[object Object]"（字符串）
// // ToNumber("[object Object]") → NaN
// console.log(Number({})); // NaN

// // 案例1：数组[1,2]转字符串
// const arr3 = [1,2];
// // 第一步：arr3.toString() → "1,2"（原始值）
// // 直接返回这个字符串，不用走valueOf()
// console.log(String([1,2])); // "1,2"
// console.log([1,2] + "3"); // "1,23"（转字符串后拼接）

// // 案例2：对象{}转字符串
// const obj2 = {};
// // 第一步：obj2.toString() → "[object Object]"（原始值）
// // 直接作为结果
// console.log(String({})); // "[object Object]"
// console.log({} + [1,2]); // "[object Object]1,2"（先转字符串再拼接）

// // 案例3：自定义对象的转换（更直观）
// const user = {
//     name: 'henry',
//     // 重写toString()，让它返回自定义字符串
//     toString() {
//         return `我是${this.name}`;
//     },
//     // 重写valueOf()，看看转字符串时会不会用到（这里不会，因为toString()已经返回原始值）
//     valueOf() {
//         return { age: 20 };
//     }
// };
// console.log(String(user)); // "我是henry"（直接用toString()的结果）