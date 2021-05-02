// https://www.codewars.com/kata/5735e39313c205fe39001173/train/javascript
function countAnimal(animalsArr, animal) {
  return (animalsArr.match(new RegExp(animal, "g")) || []).length;
}

function countAnimals(animals, count) {
  const resultArr = [];
  for (let i = 0; i < count.length; i += 1) {
    resultArr.push(countAnimal(animals, count[i]));
  }
  return resultArr;
}

// https://www.codewars.com/kata/573975d3ac3eec695b0013e0/train/javascript
function createRexExp(word) {
  let wordCopy = word.slice();
  const regStr =
    wordCopy[0] + Array(wordCopy.length - 1).join(".") + wordCopy.slice(-1);
  const regExpres = new RegExp("^" + regStr + "$");
  return regExpres;
}

function findSimilarity(str, word) {
  const arrStr = str.split(" ");
  const resultArr = [];
  const reg = createRexExp(word);
  for (let i = 0; i < arrStr.length; i += 1) {
    if (reg.test(arrStr[i])) {
      resultArr.push(arrStr[i]);
    }
  }
  return resultArr.join(" ");
}
