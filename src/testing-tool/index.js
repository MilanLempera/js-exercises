// by Kent Beck CSUnit video

var assert = function(flag) {
  if (!flag) {
    throw new Error;
  }
};

var MyUnit = function() {
  this.runCount = 0;
  this.failCount = 0;

  this.runTest = function(test) {
    this.runCount++;
    try {
      test();
    } catch (e) {
      this.failCount++;
    }
  }
};

MyUnit.runAll = function(tests) {
  var result = new MyUnit();

  for (var i = 0; i < tests.length; i++) {
    result.runTest(tests[i]);
  }

  return result;
};

MyUnit.run = function(test) {
  return this.runAll([test]);
};

    assert(true);

var thrown = false;

try {
  assert(false);
} catch (e) {
  thrown = true;
}

if (!thrown) {
  throw new Error;
}

var result = MyUnit.run(function() {
});
assert(result.runCount === 1);
assert(result.failCount === 0);

var result = MyUnit.run(function() {
  throw new Error;
});
assert(result.runCount === 1);
assert(result.failCount === 1);

var noop = function() {
};

var result = MyUnit.runAll([noop, noop]);
assert(result.runCount === 2);
assert(result.failCount === 0);

var oops = function() {
  throw new Error;
};
var result = MyUnit.runAll([noop, oops]);

assert(result.runCount === 2);
assert(result.failCount === 1);

console.log("Success!");