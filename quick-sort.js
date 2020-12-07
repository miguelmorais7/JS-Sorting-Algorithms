function quickSort(array){
    if(array.length <= 1){
        return array;
    }
    const pivot = array[array.length - 1];
    const leftArr = [];
    const rightArr = [];
    for(const el of array.slice(0, array.length - 1)){
        el < pivot ? leftArr.push(el) : rightArr.push(el);
    }
    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

const arr = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 19, 22, 54, 789, 1, 15,27, 46, 89, 33];
console.log(quickSort(arr));