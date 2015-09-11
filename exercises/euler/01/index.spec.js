describe('euler-01', function() {

  var mod3or5 = function(number) {
    return number % 3 === 0 || number % 5 === 0;
  };

  var calc35Sum = function(limit) {
    var sum = 0;
    for (var i = 0; i < limit; i++) {
      if (mod3or5(i)) {
        sum += i;
      }
    }

    return sum;
  };

  it('should be function', function() {
    expect(calc35Sum).toBeDefined();
    expect(typeof calc35Sum).toBe("function");
  });

  it('should return 23 for limit 10', function() {
    expect(calc35Sum(10)).toBe(23);
  });

  it('should return 23 for limit 10', function() {
    var result = calc35Sum(1000);
    expect(typeof result).toBe('number');

    expect(result).toBe(233168);
  });
});