let i = 0;

function max (numbers) {
    let currentMax = numbers[0];
    
    while (i < numbers.length) {
        if (numbers[i] >= currentMax) {
            currentMax = numbers[i];
        } 
        i++;}
    return currentMax;
}
let arr = [5, 7, 4, 3, 1, 9, 100]
console.log(max(arr));


function min (numbers) {
    let currentMin = numbers[0];
    
    while (i < numbers.length) {
        if (numbers[i] <= currentMin) {
            currentMin = numbers[i];
        } 
        i++;}
    return currentMin;
}
let arr2 = [5, 7, 4, 3, 1, 9, 100]
console.log(min(arr2));