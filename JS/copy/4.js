const obj = {
    name: 'henry',
    age: 18,
    like:{
        n: '🏸',
        m: '🎤'
    },
    a: 123n,
    say() {
        console.log('hello');
    }
}
const newObj = structuredClone(obj);
obj.like.m = '🏀';
console.log(newObj);