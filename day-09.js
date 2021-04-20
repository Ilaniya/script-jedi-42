// https://www.codewars.com/kata/57274562c8dcebe77e001012/train/javascript
function cutIt(arr) {
  const tempArr = arr;
  const min = Math.min(...tempArr.map(({ length }) => length));
  for (let i = 0; i <= tempArr.length - 1; i++) {
    if (tempArr[i].length > min) {
      tempArr[i] = tempArr[i].substr(0, min);
    }
  }
  return tempArr;
}

// https://www.codewars.com/kata/57277a31e5e51450a4000010/train/javascript

// https://www.codewars.com/kata/57280481e8118511f7000ffa/train/javascript
