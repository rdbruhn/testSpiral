/*! testSpiral v0.0.0 - MIT license */
'use strict';

var testSpiral = function (matrix) {
  //create results array
  var spiral = [];
  var right = matrix[0].length;
  var left = 0;
  var top = 0;
  var bottom = matrix.length;
  var total = matrix.length*matrix[0].length;
  //loop through matrix and push to spiral
  var recurse = function(status){
    if(spiral.length===total){
      return;
    }
    if(status === "right"){
      for(var i = left; i < right; i++){
        spiral.push(matrix[top][i]);
      }
      top++;
      recurse("down");
    }
    if(status === "down"){  
      for(var j = top; j < bottom; j++){
        spiral.push(matrix[j][right-1]);
      }
      right--;
      recurse("left");
    }
    if(status === "left"){  
      for(var k = right-1; k >= left; k--){
        spiral.push(matrix[bottom-1][k]);
      }
      bottom--;
      recurse("up");
    }
    if(status === "up"){
      for(var l = bottom-1; l >= top; l--){
        spiral.push(matrix[l][left]);
      }
      left++;
      recurse("right");
    }
  };
  recurse("right");
  //return spiral
  return spiral;
};

if ( typeof module !== "undefined" ) {
  module.exports = testSpiral;
}