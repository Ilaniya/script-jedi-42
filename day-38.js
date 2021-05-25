//  https://www.codewars.com/kata/basics-generators-number-1/javascript
function* generator() {
  let counter = 1;
  while (true) {
    const newValue = yield counter++;
    counter = newValue || counter;
  }
}

