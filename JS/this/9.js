// function Person(name) {
//     this.name = name;
// }
// let p1 = new Person('henry');
// console.log(p1.name); // 输出"henry"
// console.log(p1); // 输出Person { name: "henry" }，this绑定生效

// 放弃定制：return引用类型，返回手动指定的对象
// function Person(name) {
//     this.name = name;
//     return { age: 20 }; 
// }
// let p2 = new Person('harvest');
// console.log(p2); // 输出{ age: 20 }，实例被忽略
// console.log(p2.name); // 输出undefined，拿不到原本的name属性

// // 无视return：return原始类型，依然返回实例
function Person(name) {
    this.name = name;
    return 100; 
}
let p3 = new Person('henry');
console.log(p3.name); // 输出"henry"，实例正常生效