var path = require('path');
var expect = require('chai').expect;

var testSpiral = require(path.join(__dirname, '..', './testSpiral.js'));

describe('testSpiral()', function () {
  'use strict';

  it('exists', function () {
    expect(testSpiral).to.be.a('function');
  });

  it('should return an array', function () {
    var result = testSpiral([[]]);
    expect(result).to.be.a('array');
  });

  it('should return a single row array from an array with same number of values', function () {
    var testArray = [1,2,3,4,5,6,7];
    var result = testSpiral([[1,2,3,4,5,6,7]]);
    expect(result.length).to.equal(testArray.length);
  });

   it('should handle multiple rows', function () {
    var testArray = [
      [1, 2, 3, 4, 5, 6 ],
      [7, 8, 9, 10,11,12],
      [13,14,15,16,17,18]
    ];
    var result = testSpiral(testArray);
    expect(result.length).to.equal(18);
    expect(result[result.length-1]).to.equal(11);
  });

   it('should handle a single col', function () {
    var testArray = [[1],[2],[3],[4]];
    expect(testSpiral(testArray).length).to.equal(4);
  });
});
