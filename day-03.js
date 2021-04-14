// https://www.codewars.com/kata/571f832f07363d295d001ba8/train/javascript
function trueOrFalse(val){
  if (val) return "true";             
  else  return "false";
}

//https://www.codewars.com/kata/57202aefe8d6c514300001fd/train/javascript
function saleHotdogs(n){
//   if (n<5)  return 100*n
//   else if (n>=5 && n<10) return 95*n
//   else    return 90*n
  return n<5 ? 100*n : n>=5 && n<10 ? 95*n : 90*n;
}

//https://www.codewars.com/kata/572059afc2f4612825000d8a/train/javascript
function howManydays(month) {
  let days;
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      days = 31;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      days = 30;
      break;
    case 2:
      days = 28;
      break;
  }
    return days;
}
