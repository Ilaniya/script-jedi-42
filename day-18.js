// https://www.codewars.com/kata/573156709a231dcec9000ee8/train/javascript
function calculateSum(firsNum, secondNum) {
  const firstStr = firsNum + "";
  const secondStr = secondNum + "";
  let tailFirsStr;
  if (firstStr.length === 1) {
    tailFirsStr = firstStr[0];
  } else {
    tailFirsStr = firstStr[firstStr.length - 1];
  }
  const headSecondStr = secondStr[0];
  return Number(tailFirsStr) + Number(headSecondStr);
}

function sumTailAndHeadNumbers(arr) {
  const resultArr = [];
  for (let i = 0; i < arr.length - 1; i += 1) {
    resultArr.push(calculateSum(arr[i], arr[i + 1]));
  }
  return resultArr;
}

function tailAndHead(arr) {
  const arrCopy = arr;
  const arraySums = sumTailAndHeadNumbers(arrCopy);
  const multiplicationResult = arraySums.reduce(function (a, b) {
    return a * b;
  });
  return multiplicationResult;
}


// https://www.codewars.com/kata/5732b0351eb838d03300101d/train/javascript
function blackAndWhite(arr) {
  if (!Array.isArray(arr)) {
    return "It's a fake array";
  }
  if (arr.indexOf(5) !== -1 && arr.indexOf(13) !== -1) {
    return "It's a black array";
  }
  return "It's a white array";
}
