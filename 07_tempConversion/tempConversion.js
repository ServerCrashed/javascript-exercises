const convertToCelsius = function(f) {
  const tempResult = (f-32)*(5/9);
  if(tempResult==0) return 0;
  else return +tempResult.toFixed(1);
};

const convertToFahrenheit = function(c) {
  const tempResult = c*(9/5)+32;
  if(tempResult==0) return 0;
  else return +tempResult.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
