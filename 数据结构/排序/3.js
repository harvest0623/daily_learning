function findMin(arr, startIndex) {
    const len = arr.length;
    let minIndex = startIndex;
    for(let i = startIndex + 1; i < len; i++) {
        if(arr[i] < arr[minIndex]) {
            minIndex = i;
        }
    }
    return minIndex;
}
function selectSort(arr) {
    const len = arr.length;
    for(let i = 0; i < len - 1; i++) {
        let minIndex = findMin(arr, i);
        if(minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    return arr;
}
const Array = [3, 5, 2, 1, 4];
const sortedArray = selectSort(Array);
console.log(sortedArray);