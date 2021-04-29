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
function loopArr(arr, direction, steps) {
  const arrCopy = arr;
  for (let i = 0; i < steps; i += 1) {
    if (direction === "left") {
      const elem = arrCopy.shift();
      arrCopy.push(elem);
    }
    if (direction === "right") {
      const elem = arrCopy.pop();
      arrCopy.unshift(elem);
    }
  }
  return arrCopy;
}


// https://www.codewars.com/kata/572af273a3af3836660014a1
function sliceArray(startArray, arrSizePart) {
  const arrCut = startArray;
  const resultArr = [];
  for (let i = 0; i < arrSizePart.length; i += 1) {
    resultArr.push(arrCut.slice(0, arrSizePart[i]));
    arrCut.splice(0, arrSizePart[i]);
  }
  return resultArr;
}

function loopArr(arr, direction, steps) {
  const arrCopy = arr;
  for (let i = 0; i < steps; i += 1) {
    if (direction === "left") {
      const elem = arrCopy.shift();
      arrCopy.push(elem);
    }
    if (direction === "right") {
      const elem = arrCopy.pop();
      arrCopy.unshift(elem);
    }
  }
  return arrCopy;
}

function infiniteLoop(arr, d, n) {
  let arrConcat = [];
  const arrPartLength = [];
  for (let i = 0; i < arr.length; i += 1) {
    arrConcat = arrConcat.concat(arr[i]);
    arrPartLength.push(arr[i].length);
  }
  const arrLoop = loopArr(arrConcat, d, n);
  const resultArr = sliceArray(arrLoop, arrPartLength);
  return resultArr;
}
