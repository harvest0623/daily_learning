// function identify(context) {
//     return context.name.toUpperCase();
// }
// function speak(context) {
//     var greet = 'hello, I am ' + identify(context);
//     console.log(greet);
// }
// var myname = {
//     name: 'henry'
// }
// speak(myname);


function identify() {
    return this.name.toUpperCase();
}
function speak() {
    var greet = 'hello, I am ' + identify.call(this);
    console.log(greet);
}
var myname = {
    name: 'henry'
}
speak.call(myname);