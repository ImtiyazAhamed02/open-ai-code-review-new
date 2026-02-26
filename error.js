function divide(a, b) {
  return a / b;
}

function calculate() {
  const result = divide(10, 0); // ❌ Division by zero
  console.log("Result is: " + result);
}

calculate();
