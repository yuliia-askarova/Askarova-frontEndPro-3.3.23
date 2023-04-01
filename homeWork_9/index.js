//1

function getNum(arr) {
  if (Array.isArray(arr)) {
    return getNum(arr[0]);
  } else {
    return arr;
  }
}
function calcFactorial(num) {
  if (num === 0) {
    return 1;
  } else {
    return num * calcFactorial(num - 1);
  }
}
const arr = [[[[[8]]]]];
const factorial = calcFactorial(getNum(arr));
console.log(factorial);

//2

const calculator = {
  read() {
    this.a = +prompt("Введите число");
    this.b = +prompt("Введите еще одно число");
  },

  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
