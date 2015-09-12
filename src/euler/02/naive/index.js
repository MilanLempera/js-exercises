var fibonacciNaive = function(limit) {
  var f1 = 1;
  var f2 = 1;

  var i = 1;
  var evenSum = 0;
  do {
    var fNew = f1 + f2;

    if (f1 % 2 === 0) {
      evenSum += f1;
    }

    f1 = f2;
    f2 = fNew;

    i++;
  } while (f1 < limit);

  return evenSum;
};