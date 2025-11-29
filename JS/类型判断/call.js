Function.prototype.myCall = function(context, ...args) {
    // 将调用我的那个函数中的 this 指到 context 上
    // this == foo
    context == context || window;
    const fn = Symbol('fn');
    context[fn] = this;
    const res = context[fn](...args);
    delete context[fn];
    return res;
}
function foo(x, y) {
    console.log(this.a, x + y);
    return 'hello';
}
const obj = {
    a: 1,
    fn: 123
}
// foo.call(obj);
// obj.fn();
const res = foo.myCall(obj);
console.log(res);