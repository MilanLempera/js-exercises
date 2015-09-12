var fibonacciGenerator = function() {
  var values = [];

  return function() {
    if (values.length < 2) {
      values.push(1);
      return 1;
    } else {
      var sum = values[0] + values[1];
      values = [values[1], sum];

      return sum;
    }
  };
};

var isEven = function(number) {
  return number % 2 === 0;
};

var fibonacciEvenSum = function(limit) {
  var fib = fibonacciGenerator();
  var value = 0;
  var evenSum = 0;

  do {
    if (isEven(value)) {
      evenSum += value;
    }

    value = fib();

  } while (value < limit);

  return evenSum;

};