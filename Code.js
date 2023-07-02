function CalcA(num1, num2, math) {
    let math1 = '+';
    let math2 = '-';
    let math3 = '*';
    let math4 = '/';
  
    if (math === math1) {
      return num1 + num2;
    }
    if (math == math2) {
      return num1 - num2;
    }
    if (math === math3) {
      return num1 * num2;
    }
    if (math === math4) {
      return num1 / num2;
    }
  }
  
  module.exports = CalcA;
  