// https://www.codewars.com/kata/singleton-pattern/train/javascript
const Singleton = function () {
  if (!Singleton._instance) {
    Singleton._instance = this;
  }
  return Singleton._instance;
};
