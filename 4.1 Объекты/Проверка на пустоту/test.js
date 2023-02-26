'use strict';

let schedule = {};  //if object is empty 
describe("isEmpty", function() { 
  it("return true for empty obj", function() {  //return true
    assert.isTrue(isEmpty({}));
  });
});

schedule["8:30"] = "get up";  //if object exist 
describe("isEmpty", function() {
  it("return false for any ibj found", function() {   //return false
    assert.isFalse(isEmpty({anything: false}));
  });
});
