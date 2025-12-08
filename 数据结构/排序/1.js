const arr = [3, 5, 2, 1, 4];
arr.sort((a, b) => {
    return a - b;
});
console.log(arr);
arr.sort((a, b) => {
    return b - a;
});
console.log(arr);