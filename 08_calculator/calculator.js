const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(arr) {
  let sum = 0;
  arr.forEach(element => {
    sum += element;
  });

  return sum;
};

const multiply = function(arr) {
  let product = 1;
  arr.forEach(element => {
    product *= element;
  });

  return product;
  
};

const power = function(b, e) {
	return b**e;
};

const factorial = function(n) {
	let fact = 1;
  for(i=1; i<=n; i++){
    fact *=i;
  }
  return fact;
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
