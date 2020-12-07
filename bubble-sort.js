function bubbleSort(array){
    const arr = array.slice();
    for(let i = 0; i < arr.length - 1; i++){
        for(let j = 0; j < arr.length - 1 - i; j++){
            if(arr[j] > arr[j+1]){
                [arr[j], arr[j+1] = [arr[j+1], arr[j]]];
            }
        }
    }
    return arr;
}

const arr = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 19, 22, 54, 789, 1, 15,27, 46, 89, 33];
console.log(bubbleSort(arr));
console.log(arr);