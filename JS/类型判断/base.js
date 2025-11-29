// // let arr = []
// // arr.__proto__ == Array.prototype
// // arr.__proto__.__proto__ == Object.prototype
// function Parent() {

// }
// Person.prototype = new Parent()
// function Person() {
// }
// let p = new Person()
// p.__proto__ == Person.prototype
// p.__proto__.__proto__ = Parent.prototype
// p.__proto__.__proto__.__proto__ = Object.prototype

// p instanceof Object

const obj = {
    a: 1
}
const fn = 'hello'
obj[fn]= 123