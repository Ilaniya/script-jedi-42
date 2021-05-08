// https://www.codewars.com/kata/5388a9d60b24c52f4c000b5f/train/javascript


// https://www.codewars.com/kata/559f3e20f4f29869cf0000ea/train/javascript
const OrderPeople = function(people) {
    const sortedArr = people.sort((a, b) => {
            if (a.age > b.age) {
              return 1;
            }
            if (a.age < b.age) {
              return -1;
            }
            return 0;
          });
          return sortedArr;
}
