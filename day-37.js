// https://www.codewars.com/kata/5c743cec901022438549964a/train/javascript
const createIterator = (array) => {
  let index = 0;
  return {
    next() { 
      const value = array[index++];
      return {value, done: index > array.length};
    },
    get index() {
      return Math.min(index, array.length)
    }
  }
}
