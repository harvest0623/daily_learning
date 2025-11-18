Person.prototype.say = function(){
    console.log('you are good');
}
function Person() {
    this.name = 'henry';
}
const p = new Person(); // p 里面显示拥有一个属性 name 隐式拥有一个属性 say
p.say = 'hello';
const p2 = new Person();
console.log(p2.say);