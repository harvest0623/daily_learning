// function foo() {
//     console.log(this);
// }
// var a = 1;
// var obj = {
//     foo: foo
// }
// obj.foo();

// function foo() {
//     console.log(this);
// }
// var a = 1;
// var obj = {
//     foo: foo()
// }
// obj.foo;

function foo() {
    console.log(this.a);
}
var obj = {
    a: 1,
    foo: foo
}
var obj2 = {
    a: 2,
    foo: obj
}
obj2.foo.foo();