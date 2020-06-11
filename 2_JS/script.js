let inputArray = [1,2,3,4,5];
console.log(`Исходный массив : ${inputArray}`);
let shiftArray = (k, array) => {
    for(let i = 0; i < k; i++){
        array.unshift(array.pop());
    }
    console.log(`Результат : ${array}`);
}
shiftArray(3,inputArray)

