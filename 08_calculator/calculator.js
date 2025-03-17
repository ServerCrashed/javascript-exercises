const add = function(a, b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(a) {
  return a.reduce((t,c) => t+c,0)	;
};

const multiply = function(a,b) {
  return a.reduce((t,c) => t*c,1);
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(a) {
	let i=1, f=1;
  for(i;i<=a;i++)f*=i;
  return f;
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
