Car.prototype.run = function() {
    console.log('running');
}
function Car(){ // new Function()
    // const obj = {};
    // Car.call(obj);  // call 方法将 Car 函数中的 this = obj
    this.name = 'su7';
    // obj.__proto__ = Car.prototype;
    // return obj;
}

const car = new Car(); // {name: 'su7'}.__proto__ == Car.prototype

car.run();