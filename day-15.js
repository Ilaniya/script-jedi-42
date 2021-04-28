// https://www.codewars.com/kata/572ab0cfa3af384df7000ff8

function changeElFromIndex(arr, a, b) {
  const arrCopy = arr;
  let firstNumber = arr[a];
  let secondNumber = arr[b];
  arrCopy.splice(a, 1, secondNumber);
  arrCopy.splice(b, 1, firstNumber);
  return arrCopy;
}
function shuffleIt(arrayNum, ...arr) {
  let reOrderArr = arrayNum;
  for (const currentIndexArr of arr) {
    const [firstNum, secondNum] = currentIndexArr;
    reOrderArr = changeElFromIndex(reOrderArr, firstNum, secondNum);
  }
  return reOrderArr;
}

// https://www.codewars.com/kata/5fd8aa5743b49e0012d43e50/


// https://www.codewars.com/kata/572af273a3af3836660014a1
