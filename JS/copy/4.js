const obj = {
    name: 'henry',
    age: 18,
    like:{
        n: '🏸',
        m: '🎤'
    },
    a: 123n, // BigInt
    // say() {
    //     console.log('hello');
    // }
}
const newObj = structuredClone(obj);
obj.like.m = '🏀';
console.log(newObj);
// 但注意：structuredClone不支持拷贝函数
// console.log(newObj.say); // undefined