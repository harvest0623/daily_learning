function Car() {
    this.name = 'su7';
}
const car = new Car();
console.log(car.constructor); // 继承到的，从构造函数的原型上
// 让每一个实例对象都能知道自己是由谁创建出来的