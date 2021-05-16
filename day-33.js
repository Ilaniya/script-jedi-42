// https://www.codewars.com/kata/array-number-reduce/train/javascript


// https://www.codewars.com/kata/52ed80dfe7bf9ae61d000056/train/javascript
Object.deepFreeze = function(object) {
  Object.freeze(object);
  for (let obj in object) {
    Object.deepFreeze(object[obj]);
  }
}
