// https://www.codewars.com/kata/547c71fdc5b2b38db1000098/train/javascript
function NameMe(first, last) {
    this.firstName = first;
    this.lastName = last;
    return this.name = `${first} ${last}`
}


class NameMe {
  constructor(first, last) {
    this._firstName = first;
    this._lastName = last;
  }
  get firstName() {
    return this._firstName;
  }
  get lastName() {
    return this._lastName;
  }
  get name() {
    return this._firstName + " " + this._lastName;
  }
  set name(newName) {
    [this._firstName, this._lastName] = newName.split(" ");
  }
}




// https://www.codewars.com/kata/547f1a8d4a437abdf800055c/train/javascript

