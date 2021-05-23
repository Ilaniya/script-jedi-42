//https://www.codewars.com/kata/5637ead70013386e30000027/solutions/javascript

function* generator(a) {
  let b = 1;
  if (a === 0) {
    while (a < a + 1) yield `0 x ${a++} = 0`;
  }
  if (a < 6) {
    while (a < a + 1) yield `1 x ${a++} = ${b++}`;
  }
  while (a < a + 1) yield `${a} x ${b++} = ${a * (b - 1)}`;
}
