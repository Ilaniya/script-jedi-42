// https://www.codewars.com/kata/5728203b7fc662a4c4000ef3/train/javascript
function lastCharToLower(str) {
  const newStr = str.slice(0, str.length - 1) + str.slice(-1).toLowerCase();
  return newStr;
}
function alienLanguage(str) {
  const tempStr = str.toUpperCase();
  const words = tempStr.split(' ');
  console.log(words);
  for (let i = 0; i < words.length; i++) {
    words[i] = lastCharToLower(words[i]);
  }
  return words.join(' ');
}

// https://www.codewars.com/kata/57284d23e81185ae6200162a/train/javascript


// https://www.codewars.com/kata/5729b103dd8bac11a900119e/train/javascript
