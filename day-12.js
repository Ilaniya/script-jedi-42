// https://www.codewars.com/kata/59859f435f5d18ede7000050/train/javascript
function wordToBin(str) {
  const arrayBinary = [];
  for (let i = 0; i < str.length; i++) {
    const strInCode = str.charCodeAt(i);
    arrayBinary.push(`0${strInCode.toString(2)}`);
    }
  return arrayBinary;
}


// https://www.codewars.com/kata/57f75cc397d62fc93d000059/train/javascript
function sumNumbersInStr(str) {
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum += parseInt(str[i]);
  }
  return sum;
}
function strToASCII(str) {
  let tempStr = "";
  for (let i = 0; i < str.length; i++) {
    tempStr += str.charCodeAt(i);
  }
  return tempStr;
}
function replaceChars(str, a, b) {
  let tempStr = str;
  for (let i = 0; i < tempStr.length; i++) {
    if (tempStr[i] === a && i < tempStr.length - 1) {
      tempStr = `${tempStr.substring(0, i)}${b}${tempStr.substring(i + 1)}`;
    }
    if (tempStr[i] === "7" && i === tempStr.length - 1) {
      tempStr = `${tempStr.substring(0, i)}${b}`;
    }
  }
  return tempStr;
}
function calc(x) {
  const total1 = strToASCII(x);
  const total2 = replaceChars(total1, "7", "1");
  return sumNumbersInStr(total1) - sumNumbersInStr(total2);
}


