// https://www.codewars.com/kata/santaclausable-interface
function isSantaClausable(obj) {
    const hasHoProp =  typeof obj.sayHoHoHo ===  'function';
    const hasGiftsProp = typeof obj.distributeGifts === 'function'; 
    const hasChimneyProp = typeof obj.goDownTheChimney === 'function';  
    if (hasHoProp && hasGiftsProp && hasChimneyProp){
      return true;
  }
     return false;
}

function isSantaClausable(obj) {
  return  typeof (obj.sayHoHoHo && obj.distributeGifts && obj.goDownTheChimney) == 'function';
}

// https://www.codewars.com/kata/52e5e86b2ff32887280002e4/train/javascript
function Cylon(model) {
  this.model = model;
  this.attack = function () {
    return "Destroy all humans!";
  };
}

function HumanSkin(model) {
  Cylon.call(this, model);
  this.model = model;
  this.infiltrate = function () {
    return "Infiltrate the colonies";
  };
}
HumanSkin.prototype = Object.create(Cylon.prototype);

//
