// https://www.codewars.com/kata/57216d4bcdd71175d6000560/train/javascript

// https://www.codewars.com/kata/5721a78c283129e416000999/train/javascript
function pickIt(arr){
  let odd=[],even=[];
  for (let i = 0; i <arr.length; i++){
    if(arr[i]%2 === 1){
      odd.push(arr[i]);
    }
    else{
      even.push(arr[i]);
    }
  }
    return [odd,even];
}

// https://www.codewars.com/kata/5721c189cdd71194c1000b9b/train/javascript
function grabDoll(dolls) {
  let bag = [];
  for (let i = 0; i < dolls.length; i++) {
    if (bag.length < 3) {
      if (dolls[i] === "Hello Kitty" || dolls[i] === "Barbie doll") {
        bag.push(dolls[i]);
      } else continue;
    } else break;
  }
  return bag;
}

// https://www.codewars.com/kata/5722b3f0bd5583cf44001000/train/javascript
function giveMeFive(obj){
  var five = [];
  for(var key in obj)
  {
    if(key.length == 5)
    {
      five.push(key);
    }
    if(obj[key].length == 5)
    {
      five.push(obj[key]);
    }  
  }
  return five;
}
