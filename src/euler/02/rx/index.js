var fibonacciGeneratorFactory = function() {
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

var stopConditionFactory = function(limit) {
  return function(number) {
    return number < limit;
  }
};

var isEven = function(number) {
  return number % 2 === 0;
};

var fibonacciEvenSumRx = function(limit) {
  var fibonacci = fibonacciGeneratorFactory();

  return Rx.Observable.generate(
      fibonacci(),
      stopConditionFactory(limit),
      fibonacci,
      function(x) {
        return x;
      }
  )
      .filter(isEven)
      .sum();

};