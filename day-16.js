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


// https://www.codewars.com/kata/572fdeb4380bb703fc00002c
