//  https://www.codewars.com/kata/basics-generators-number-1/javascript
function* generator(number) {
  let counter = 1;
  
  while (number === undefined) {
    yield counter++;
  }
  if (number !== undefined) {
    counter = number;
    yield counter;
  }
}

// один тест не проходить, не розумію що не так
