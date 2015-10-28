describe('euler-02-rx', function() {

  describe('with interval', function() {

    var fibonacciRxWhile;

    beforeEach(function() {
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

      var fibonacci = fibonacciGeneratorFactory();

      var fibSource = Rx.Observable.generate(
          fibonacci(),
          isFinite,
          fibonacci,
          function(x) {
            return x;
          }
      );

      var stopConditionFactory = function(limit) {
        return function(number) {
          return number >= limit;
        }
      };

      var isEven = function(number) {
        return number % 2 === 0;
      };

      fibonacciRxWhile = function(limit) {

        var stopCondition = stopConditionFactory(limit);

        return fibSource
            .do(function(input) {
              console.log(input);
              if (stopCondition(input)) {
                console.log('stopCondition')
                this.onCompleted();
              }
            })
            .filter(isEven)
            .sum();

      };

    });

    it('should return 44 for number little that 90', function(done) {
      fibonacciRxWhile(90)
          .subscribe(function(value) {
            expect(value).toBe(44);
          },
          done.fail.bind(done, "error function called"),
          done
      );

    });

    it('should return 4613732 for number little that 4000000', function(done) {

      fibonacciRxWhile(4000000)
          .subscribe(function(value) {
            expect(value).toBe(4613732);
          },
          done.fail.bind(done, "error function called"),
          done
      );
    });

  });

});