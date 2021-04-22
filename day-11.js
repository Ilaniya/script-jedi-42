// https://www.codewars.com/kata/playing-with-sets-equal-or-not/train/javascript
function areEqual(s1, s2) {
  if (s1.size !== s2.size) {
    return false;
  }
  for (let value of s1) {
    if (!s2.has(value)) {
      return false;
    }
  }
  return true;
}
function notEqual(s1, s2) {
  return !areEqual(s1, s2);
}

// https://www.codewars.com/kata/5609fd5b44e602b2ff00003a/train/javascript
function process2Arrays(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  const resultArr = [];
  let countElInBothArr = 0;
  const countElInOneOfArr = new Set();
  let countElLeftArr1 = 0;
  let countElLeftArr2 = 0;
  for (let value of set1) {
    if (set2.has(value)) {
      countElInBothArr++;
    } else {
      countElInOneOfArr.add(value);
      countElLeftArr1++;
    }
  }
  for (let value of set2) {
    if (!set1.has(value)) {
      countElLeftArr2++;
      countElInOneOfArr.add(value);
    }
  }
  resultArr.push(countElInBothArr);
  resultArr.push(countElInOneOfArr.size);
  resultArr.push(countElLeftArr1);
  resultArr.push(countElLeftArr2);
  return resultArr;
}
