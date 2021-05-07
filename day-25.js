// https://www.codewars.com/kata/53d4eec01f1a9b3020000786/train/javascript
var name = 'The Window';

var alpha = {
    name : 'My Alpha',
    getNameFunc : function(){
    return function(){
        return this.name;
        }.bind(this);
    }
};


// https://www.codewars.com/kata/52d56d9c6b02b2fa9a0006d9/train/javascript
Function.prototype.call = function (obj, ...arr) {
  return this.apply(obj, arr)
}
