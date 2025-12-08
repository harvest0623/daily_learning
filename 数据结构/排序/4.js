const arr = [5, 3, 2, 1, 4];
function insertSort(arr){
    const len = arr.length;
    const newArr = [arr[0]];
    for(let i = 1; i < len; i++) {
        let current = arr[i];
        let j = newArr.length - 1;
        while(j >= 0 && current < newArr[j]) {
            newArr[j + 1] = newArr[j];
            j--;
        }
        newArr[j + 1] = current;
    }
    return newArr;
}
const sortedArray = insertSort(arr);
console.log(sortedArray);