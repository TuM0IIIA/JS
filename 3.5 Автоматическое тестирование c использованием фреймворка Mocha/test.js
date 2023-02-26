'use strict';

//in this functions author tried to combine all tests in one example
it("Возводит x в степень n", function() { 
  let x = 5;
  let result = x;
  assert.equal(pow(x, 1), result);
  result *= x;
  assert.equal(pow(x, 2), result);
  result *= x;
  assert.equal(pow(x, 3), result);
  });
  

// much better split the execution
  describe("pow", function() {
    //i like how it's appear in the browser , so I stayed a couple samples from the book
    it("для отрицательных n возвращает NaN", function() { //sample from book with negative numbers
      assert.isNaN(pow(2, -1));
      });
    it("для дробных n возвращает NaN", function() {  //sample from book with fraction numbers
      assert.isNaN(pow(2, 1.5));
      });
    //final change of our example  
    describe("возводит 5 в степень x в", function() { 
      
    function makeTest(x) {  //func takes degree of the number in our case 5
    let expected = 5 ** x ; //expected result 
    
      it(`5 в степени ${x} будет ${expected}`, function() {  //for 5 in degree of x
        assert.equal(pow(5, x), expected);  //we check the expected parameter
      });
    }
      for (let x = 1; x <= 5; x++) { //range of degree in our case 1-5
        makeTest(x);
      }
    });
  });