// https://www.codewars.com/kata/5258b272e6925db09900386a/train/javascript
function numbers(...arr) {
  let isArrNumeric = true;
  for (let i = 0; i < arr.length; i++) {
    if (!Number.isInteger(arr[i]) && !Number.isNaN(arr[i])) {
      isArrNumeric = false;
      return isArrNumeric;
    }
  }
  return isArrNumeric;
}
