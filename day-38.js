//  https://www.codewars.com/kata/basics-generators-number-1/javascript
function* generator() {
  let counter = 1;
    while (true) {
    counter = yield counter++ || counter;
  }
  
}

// декілька тестів не проходить, не розумію що не так
