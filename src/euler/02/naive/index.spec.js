describe('euler-02-naive', function() {

  it('should be function', function() {
    expect(fibonacciNaive).toBeDefined();
    expect(typeof fibonacciNaive).toBe("function");
  });

  it('should return ', function() {
    expect(fibonacciNaive(90)).toBe(44);
  });

  it('should return 4613732 ', function() {
    expect(fibonacciNaive(4000000)).toBe(4613732);
  });
});