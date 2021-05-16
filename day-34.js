// https://www.codewars.com/kata/547274e24481cfc469000416/train/javascript

// https://www.codewars.com/kata/56ff9b53140fcca90b000530/train/javascript
class Labrador extends Dog {
  constructor(name, age, gender, master) {
    super(name, age, gender, 'Labrador', 'Large', master, true)
  }
}

// https://www.codewars.com/kata/55a144eff5124e546400005a/train/javascript
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age; 
      this.info =`${this.name}s age is ${this.age}`;       
    }
}
