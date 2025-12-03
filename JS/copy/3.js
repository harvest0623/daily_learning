const obj = {
    name: 'henry',
    like: ['🏸']
}
const obj2 = {
    age: 18
}
const newObj = Object.assign({}, obj);
obj.name = 'harvest';
obj.like[0] = '🎤'
console.log(newObj);
// console.log(newObj == obj);