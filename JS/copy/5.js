const obj = {
    name: 'henry',
    age: 18,
    like:{
        n: '🏸',
        m: '🎤'
    },
    say() {
        console.log('hello');
    },
    a: undefined,
    b: null,
    c: NaN,
    d: Infinity
}
const o = JSON.parse(JSON.stringify(obj));
obj.like.m = '🏀';
console.log(o);