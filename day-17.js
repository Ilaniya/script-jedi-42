// https://www.codewars.com/kata/573023c81add650b84000429
function countGrade(scores) {
  const resultObject = {};
  const countS = scores.filter((x) => x === 100);
  const countA = scores.filter((x) => x < 100 && x >= 90);
  const countB = scores.filter((x) => x < 90 && x >= 80);
  const countC = scores.filter((x) => x < 80 && x >= 60);
  const countD = scores.filter((x) => x < 60 && x >= 0);
  const countX = scores.filter((x) => x === -1);
  resultObject.S = countS.length;
  resultObject.A = countA.length;
  resultObject.B = countB.length;
  resultObject.C = countC.length;
  resultObject.D = countD.length;
  resultObject.X = countX.length;
  return resultObject;
}


// https://www.codewars.com/kata/57308546bd9f0987c2000d07
function reverseNumber(number) {
  const numToStr = `${number}`;
  const splitStr = numToStr.split("");
  const mirrorStr = splitStr.reverse();
  const joinStr = mirrorStr.join("");
  if (joinStr[0] === "0") {
    return `0${parseInt(joinStr, 10)}`;
  }
  return parseInt(joinStr, 10);
}

function mirrorImage(arr) {
  const resultArr = [];
  arr.some((x, i) => {
    const arrToreturn = [];
    if (arr[i] === arr[i + 1]) {
      resultArr.push(arr[i], arr[i + 1]);
      return true;
    }
    if (arr[i] !== arr[i + 1] && reverseNumber(arr[i]) === arr[i + 1]) {
      resultArr.push(arr[i], arr[i + 1]);
      return true;
    }
  });
  if (resultArr.length === 0) {
    resultArr.push(-1, -1);
  }
  return resultArr;
}


// https://www.codewars.com/kata/5731861d05d14d6f50000626
