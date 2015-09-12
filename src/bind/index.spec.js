describe('function', function() {

  Function.prototype.bind = function(newThis) {
    var fce = this;
    var newThis = arguments[0];
    var args = Array.prototype.slice.call(arguments, 1);

    return function() {
      return fce.apply(newThis, args);
    }
  };

  var fce = function() {
    return this;
  };

  it('should have bind function', function() {
    expect(typeof fce.bind).toBeDefined();
    expect(typeof fce.bind).toBe("function");
  });

  describe('property bind', function() {

    it('should return function', function() {
      var bindedFunction = fce.bind();
      expect(typeof bindedFunction).toBe("function");
    });

    it('should set this in function', function() {
      var testThis = {};

      var bindedFunction = fce.bind(testThis);
      expect(bindedFunction()).toBe(testThis);
    });

    it('should set params to function', function() {
      var testThis = {};

      var getArgumentsAsArray = function() {
        return Array.prototype.slice.call(arguments);
      };

      var bindedFunction = getArgumentsAsArray.bind(testThis, 1, 2, 3);
      expect(bindedFunction()).toEqual([1, 2, 3]);
    });

  });

})
;