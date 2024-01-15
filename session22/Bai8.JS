function isValidNumber(num) {
    return !isNaN(num);
  }
  function calculate(num1, num2, operator) {
    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        return num1 / num2;
      default:
        return NaN; 
    }
  }
  let input1 = prompt('Nhập số thứ nhất:');
  let number1 = parseFloat(input1);
  if (!isValidNumber(number1)) {
    console.log('Số thứ nhất không hợp lệ.');
  } else {
    let input2 = prompt('Nhập số thứ hai:');
    let number2 = parseFloat(input2);
    if (!isValidNumber(number2)) {
      console.log('Số thứ hai không hợp lệ.');
    } else {
      let operator = prompt('Nhập phép tính (+, -, *, /):');
      let result = calculate(number1, number2, operator);
      if (isNaN(result)) {
        console.log('Phép tính không hợp lệ.');
      } else {
        console.log('Kết quả:', result);
      }
    }
  }
  