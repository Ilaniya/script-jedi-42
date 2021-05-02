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
