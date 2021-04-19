// https://www.codewars.com/kata/5722fd3ab7162a3a4500031f/train/javascript
function whatNumberIsIt(n) {
  if (n === 1.7976931348623157e308) {
    return "Input number is Number.MAX_VALUE";
  } else if (n === 5e-324) {
    return "Input number is Number.MIN_VALUE";
  } else if (n > 1.7976931348623157e308) {
    return "Input number is Number.POSITIVE_INFINITY";
  } else if (n < 5e-324) {
    return "Input number is Number.NEGATIVE_INFINITY";
  } else if (Number.isNaN(n)) {
    return "Input number is Number.NaN";
  } else return `Input number is ${n}`;
}

function whatNumberIsIt(n) {
  switch (n) {
    case Number.MAX_VALUE:
      return "Input number is Number.MAX_VALUE";
    case Number.MIN_VALUE:
      return "Input number is Number.MIN_VALUE";
    case Number.POSITIVE_INFINITY:
      return "Input number is Number.POSITIVE_INFINITY";
    case Number.NEGATIVE_INFINITY:
      return "Input number is Number.NEGATIVE_INFINITY";
    case Number(n):
      return `Input number is ${n}`;
    default:
      return "Input number is Number.NaN";
  }
}

// https://www.codewars.com/kata/57238ceaef9008adc7000603/train/javascript

// https://www.codewars.com/kata/57256064856584bc47000611/train/javascript
