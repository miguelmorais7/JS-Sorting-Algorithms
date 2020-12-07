function selectionSort(array){
    const arr = array.slice();
    for(let i = 0; i < arr.length - 1; i++){
        let minIndex = i;
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    return arr;
}

const arr = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 19, 22, 54, 789, 1, 15,27, 46, 89, 33];
const output = selectionSort(arr);
console.log(output);
console.log(arr);