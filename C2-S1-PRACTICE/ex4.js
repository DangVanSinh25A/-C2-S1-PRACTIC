const myArray = [1,2,3,4,5];
function filterEvenNumbers(arr){
    return arr.filter((element)=> element % 2 == 0);
}
function squareNumbers(arr){
    return arr.map((element=> element ** 2))
}
function sumArray(arr){
    return arr.reduce((accumulator,currentValue)=> accumulator+currentValue)

}
console.log(filterEvenNumbers(myArray));
console.log(squareNumbers(myArray));
console.log(sumArray(myArray));