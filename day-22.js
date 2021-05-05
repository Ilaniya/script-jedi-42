// https://www.codewars.com/kata/559f860f8c0d6c7784000119/train/javascript
function anyArrows(arrows) {
  return arrows.some((oneArrow) => !oneArrow.damaged);
}

// https://www.codewars.com/kata/586909e4c66d18dd1800009b/train/javascript
function multiplArr(arr, num) {
  return arr.map((el) => el * num);
}
function multiplyAll(arr) {
  return (num) => multiplArr(arr, num);
}
