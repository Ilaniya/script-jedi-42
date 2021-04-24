// https://www.codewars.com/kata/maximum-multiple/train/javascript
function maxMultiple(divisor, bound) {
  for (let i = bound; i >= divisor; i--) {
    if (i % divisor === 0) {
      return i;
    }
  }
}

// https://www.codewars.com/kata/is-he-gonna-survive/train/javascript
function hero(bullets, dragons) {
  if (bullets - 2 * dragons >= 0) {
    return true;
  } else return false;
}

// https://www.codewars.com/kata/59441520102eaa25260000bf/train/javascript
function unusualFive() {
  const fiveStr = "Tadam";
  return fiveStr.length;
}



