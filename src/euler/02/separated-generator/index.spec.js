describe('euler-02-separated-generator', function() {

  it('should be function', function() {
    expect(fibonacciEvenSum).toBeDefined();
    expect(typeof fibonacciEvenSum).toBe("function");
  });

  it('should return 44 for number little that 10', function() {
    expect(fibonacciEvenSum(90)).toBe(44);
  });

  it('should return 4613732 for number little that 4000000', function() {
    expect(fibonacciEvenSum(4000000)).toBe(4613732);
  });

  describe("fibonacci generator function", function() {

    it('should return 1 and 1 as first two number', function() {
      var fib = fibonacciGenerator();
      expect(fib()).toBe(1);
      expect(fib()).toBe(1);
    });

    it('should return 2 as third number', function() {
      var fib = fibonacciGenerator();
      fib();
      fib();

      expect(fib()).toBe(2);
    });

    it('should return 3 as fourth number', function() {
      var fib = fibonacciGenerator();
      fib();
      fib();
      fib();

      expect(fib()).toBe(3);
    });

  });

});