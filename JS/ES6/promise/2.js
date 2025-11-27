let a = 1;
function foo() {
    setTimeout(() => {
        a = 2;
        console.log('foo',a);
        bar();
    }, 1000)
}
function bar() {
    setTimeout(() => {
        a = 3;
        console.log('bar',a);
        baz();
    }, 2000)
}
console.log(a);
function baz(){
    console.log(a);
}
foo();