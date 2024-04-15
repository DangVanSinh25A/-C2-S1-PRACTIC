function transformToObjects(listOfNumbers) {
    let result = [];
    for (let i = 0; i < listOfNumbers.length; i++) {
      result.push({ val: listOfNumbers[i] });
    }
    return result;
  }

  console.log(JSON.stringify(transformToObjects([1, 2, 3])));

  