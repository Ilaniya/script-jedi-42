// https://www.codewars.com/kata/573e6831e3201f6a9b000971/train/javascript
var regex=/\b(\w?)(\w?)(\w)\w{0,1}\3\2\1\b/g


// https://www.codewars.com/kata/573fb9223f9793e485000453/train/javascript
var regex = /\d{3}(?!\$)/g;
function addCommas(money, regex) {
  const strArr = money.split("").reverse().join("");
  const replaceStr = strArr.replace(regex, (x) => x + ",");
  const resultArr = replaceStr.split("").reverse().join("");
  return resultArr;
}
