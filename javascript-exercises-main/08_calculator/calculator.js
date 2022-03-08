const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	array_sum = 0;
  for(let i = 0; i < array.length; i++){
    array_sum += array[i];
  }
  return array_sum;
};

const multiply = function(array) {
  array_product = 1;
  for(let i = 0; i < array.length; i++){
    array_product *= array[i];
  }
  return array_product;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
  if (num < 0){
    return 'Only Positive Integers';
  } else if (num == 0){
    return 1;
  } else {
    return num * factorial(num - 1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
