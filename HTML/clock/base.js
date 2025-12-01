const arr = [1, 2, 3, 4, 5];
const newArr = arr.map((item, index, array) => {  // map 天生会帮我们创建一个新数组
    return item * 10;
})
console.log(newArr);