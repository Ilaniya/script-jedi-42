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

// один вид тестів не проходить, не розумію що не так
