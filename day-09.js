// https://www.codewars.com/kata/57274562c8dcebe77e001012/train/javascript
function cutIt(arr) {
  const tempArr = arr;
  const min = Math.min(...tempArr.map(({ length }) => length));
  for (let i = 0; i < tempArr.length; i++) {
    if (tempArr[i].length > min) {
      tempArr[i] = tempArr[i].substr(0, min);
    }
  }
  return tempArr;
}

// https://www.codewars.com/kata/57277a31e5e51450a4000010/train/javascript
function firstToLast(str, c) {
  const posC = str.indexOf(c);
  const posCLast = str.lastIndexOf(c);
  if (posC === -1) {
    return -1;
  }
  if (posC === 1 && posCLast === -1) {
    return 0;
  }
  return posCLast - posC;
}

// https://www.codewars.com/kata/57280481e8118511f7000ffa/train/javascript
function splitAndMerge(string, separator) {
  const words = string.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].split("").join(separator);
  }
  const resultStr = words.join(" ");
  return resultStr;
}
