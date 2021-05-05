// https://www.codewars.com/kata/520d9c27e9940532eb00018e/train/javascript
function solution(...arr) {
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = i + 1; j < arr.length; j += 1) {
      if (arr[i] === arr[j]) return true;
    }
  }
  return false;
}

// https://www.codewars.com/kata/541629460b198da04e000bb9/train/javascript
function last(arr, ...list) {
  if (list.length > 0) {
    return list[list.length - 1];
  }
  if (list.length === 0 && arr.length > 1) {
    return arr[arr.length - 1];
  }
  if (!Array.isArray(arr)) {
    return arr;
  }
}
