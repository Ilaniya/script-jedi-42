// https://www.codewars.com/kata/is-this-my-tail/train/javascript
function correctTail(body, tail) {
  let sub = body.substr(body.length - tail.length);
  if (sub === tail) {
    return true;
  } else return false;
}

// https://www.codewars.com/kata/56f6ad906b88de513f000d96/train/javascript
function bonusTime(salary, bonus) {
  if(bonus){
    return `£${salary*10}`;
  }
   else return "£" + salary;
}

// https://www.codewars.com/kata/5a58d889880385c2f40000aa/train/javascript
