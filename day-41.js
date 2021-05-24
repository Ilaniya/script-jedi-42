// https://www.codewars.com/kata/57b06f90e298a7b53d000a86/train/javascript 
function queueTime(customers, n) {
  const arrTemp = new Array(n).fill(0);
  for (let time of customers) {
    const idx = arrTemp.indexOf(Math.min(...arrTemp));
    arrTemp[idx] += time;
  }
  return Math.max(...arrTemp);
}

//https://www.codewars.com/kata/567ed5db4089538eea000010/solutions/javascript
function launchAll(launchMissile) {
  for(let i = 0; i < 5; i++) {
    setTimeout(function() {
      launchMissile(i);
    }, i * 1000);
  }
}
