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
function decodeStr(str) {
  const chars = str.split("");
  for (let i = 0; i < chars.length; i++) {
    const code = chars[i].charCodeAt();
    if (code >= 99 && code <= 123) {
      chars[i] = String.fromCharCode(chars[i].charCodeAt() - 3);
    }
    if (code >= 65 && code <= 90) {
      chars[i] = String.fromCharCode(chars[i].charCodeAt() - 3);
    }
    if (code === 97) {
      chars[i] = String.fromCharCode(120);
    }
    if (code === 98) {
      chars[i] = String.fromCharCode(121);
    }
    if (code === 99) {
      chars[i] = String.fromCharCode(122);
    }
    if (code === 67) {
      chars[i] = String.fromCharCode(90);
    }
    if (code === 66) {
      chars[i] = String.fromCharCode(89);
    }
    if (code === 65) {
      chars[i] = String.fromCharCode(88);
    }
  }
  return chars.join("");
}
function topSecret(str) {
  const words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = decodeStr(words[i]);
  }
  return words.join(" ");
}


// https://www.codewars.com/kata/5729b103dd8bac11a900119e/train/javascript
function fiveLine(s) {
  const sRemSpace = s.trim();
  return `${sRemSpace}\n${sRemSpace}${sRemSpace}\n${sRemSpace}${sRemSpace}${sRemSpace}\n${sRemSpace}${sRemSpace}${sRemSpace}${sRemSpace}\n${sRemSpace}${sRemSpace}${sRemSpace}${sRemSpace}${sRemSpace}`;
}

