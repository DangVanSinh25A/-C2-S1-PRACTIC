function findAverage (numbers) {
    if (numbers.length === 0) {
        return 0; 
    }

    let sum = 0;
    let validNumbersCount = 0;
    for (let i=0; i < numbers.length; i++) {
        if (typeof numbers[i] === 'number' && !isNaN(numbers[i])) {
            sum += numbers[i];
            validNumbersCount++;
          }
    }
    if(validNumbersCount === 0){
        return 0;
    }
    return sum / numbers.length;
}

const numbers = [1,2,3,4,5];
console.log(findAverage([1,"ưdqwd"]));