// https://www.codewars.com/kata/53844152aa6fc137d8000589/train/javascript
function always(n) {
  return function () {
    return n;
  };
}

function always (n) {
  return () => n;
}

// https://www.codewars.com/kata/59bdbe9d46038724ca0000b9/train/javascript
const state = {
  modifier: 2,
};
function solution(arr, obj) {
  const newArr = arr.slice();
  for (let i = 0; i < newArr.length; ++i) {
    newArr[i] += 2 * obj.modifier;
  }
  return newArr;
}
