// https://www.codewars.com/kata/572cb264362806af46000793
function sumAllEl(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i += 1) {
    sum += arr[i];
  }
  return sum;
}
function threeInOne(arr) {
  const copyArr = arr;
  const resultArr = [];
  const amountOfNumberToSum = 3;
  for (let i = 0; i < copyArr.length; i += amountOfNumberToSum) {
    const arrForSum = copyArr.slice(i, i + amountOfNumberToSum);
    resultArr.push(sumAllEl(arrForSum));
  }
  return resultArr;
}


// https://www.codewars.com/kata/572df796914b5ba27c000c90
function createArrFromRepeatNumber(number, amount) {
  const arr = [];
  for (let i = 0; i < amount; i += 1) {
    arr.push(number);
  }
  return arr;
}

function sortIt(arr) {
  // copy array to a new array
  const arrCopy = arr.slice().sort((a, b) => b - a);
  // create dictionary object that holds number of occurrence of each number
  // fill dictionary given the array copy

  const dictionary = {};

  for (let i = 0; i < arrCopy.length; i++) {
    let currentNumber = arrCopy[i];
    if (dictionary[currentNumber] === undefined) {
      dictionary[currentNumber] = 0;
    }
    dictionary[currentNumber] = dictionary[currentNumber] + 1;
  }

  // find maximum number of repeats
  let maxRepeatNumber = 0;
  let resultArr = [];
  for (const [key, value] of Object.entries(dictionary)) {
    if (value > maxRepeatNumber) {
      maxRepeatNumber = value;
    }
  }
  // for loop from 1 to maximum number of repeats
  // create array from dictionary
  let dictionaryArray = [];
  for (let key in dictionary) {
    if (dictionary.hasOwnProperty(key)) {
      dictionaryArray.push([Number(key), dictionary[key]]);
    }
  }
  for (
    let numberOfRepeat = 1;
    numberOfRepeat <= maxRepeatNumber;
    numberOfRepeat += 1
  ) {
    // loop all keys from 9 to 0
    for (let j = dictionaryArray.length - 1; j >= 0; j--) {
      // if current key value === current number of repeats (i)

      const currentElement = dictionaryArray[j];
      const currentValue = currentElement[1];
      if (currentValue === numberOfRepeat) {
        // result array append j number i times
        const arrTemp = createArrFromRepeatNumber(
          currentElement[0],
          numberOfRepeat
        );
        resultArr = resultArr.concat(arrTemp);
      }
    }
  }
  return resultArr;
}


// https://www.codewars.com/kata/572fdeb4380bb703fc00002c
function insertPipe(string) {
  const copyStr = string;
  const indexOfMidleStr = copyStr.length / 2;
  if (copyStr.length % 2 === 0) {
    return `${copyStr.slice(0, indexOfMidleStr)}|${copyStr.slice(
      indexOfMidleStr,
      copyStr.length,
    )}`;
  }
  if (copyStr.length % 2 !== 0) {
    return `${copyStr.slice(0, Math.trunc(indexOfMidleStr))}|${copyStr.slice(
      indexOfMidleStr + 1,
      copyStr.length,
    )}`;
  }
}
function isolateIt(arr) {
  const arrCopy = arr;
  const arrResult = arrCopy.map(insertPipe);
  return arrResult;
}
