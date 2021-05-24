// https://www.codewars.com/kata/57b06f90e298a7b53d000a86/train/javascript 


//https://www.codewars.com/kata/567ed5db4089538eea000010/solutions/javascript
function launchAll(launchMissile) {
  for(let i = 0; i < 5; i++) {
    setTimeout(function() {
      launchMissile(i);
    }, i * 1000);
  }
}
