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
function colorOf(r, g, b) {
  let rInSix = r.toString(16);
  let gInSix = g.toString(16);
  let bInSix = b.toString(16);
  if (rInSix.length === 1) {
    rInSix = 0 + rInSix;
  }
  if (gInSix.length === 1) {
    gInSix = 0 + gInSix;
  }
  if (bInSix.length === 1) {
    bInSix = 0 + bInSix;
  }
  return `#${rInSix}${gInSix}${bInSix}`;

  // let color = new Object();
  // color.r = r.toString(16);
  // color.g = g.toString(16);
  // color.b = b.toString(16);
  //   for (let property in color){
  //   if(color[property].length === 1){
  //   color[property] = '0' + color[property];
  // }
  //     return `#${color.r}${color.g}${color.b}`
  // }
}

// https://www.codewars.com/kata/57256064856584bc47000611/train/javascript
