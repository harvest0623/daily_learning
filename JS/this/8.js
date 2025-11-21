// function foo() {
//     console.log(this);
// }
// foo();

// var bar = () => {
//     console.log(this);
// }
// bar();

function foo() {
    var bar = () => {
        this.a = 2;
    }
    bar();
}
var obj = {
    a: 1,
    baz: foo
}
obj.baz();
console.log(obj);