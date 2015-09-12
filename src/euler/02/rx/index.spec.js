describe('euler-02-rx', function() {

  it('should have defined reactive extension', function() {
    expect(Rx).toBeDefined();
  });

  it('should be function', function() {
    expect(fibonacciEvenSumRx).toBeDefined();
    expect(typeof fibonacciEvenSumRx).toBe("function");
  });

  it('should return 44 for number little that 10', function(done) {
    fibonacciEvenSumRx(90)
        .subscribe(function(value) {
          expect(value).toBe(44);
        },
        done.fail.bind(done, "error function called"),
        done
    );

  });

  it('should return 4613732 for number little that 4000000', function(done) {

    fibonacciEvenSumRx(4000000)
        .subscribe(function(value) {
          expect(value).toBe(4613732);
        },
        done.fail.bind(done, "error function called"),
        done
    );
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