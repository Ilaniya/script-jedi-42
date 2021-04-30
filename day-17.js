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


// https://www.codewars.com/kata/5731861d05d14d6f50000626
