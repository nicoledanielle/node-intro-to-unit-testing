'use strict';

//import chai, declare
const should = require('chai').should();

//import fizzBuzzer
const fizzBuzzer = require('../fizzBuzzer');

//unit tests for our `fizzBuzzer` function
describe ('fizzBuzzer', function(){
  //test the normal case
  it('should divide two numbers & return appropriate result', function(){
    //range of normal inputs, including
    //notable cases
    const normalCases = [
      {num: 15, expected: 'fizz-buzz'},
      {num: 5, expected: 'buzz'},
      {num: 3, expected: 'fizz'},
      {num: 1, expected: 1}
    ];
    //for each num, `fizzBuzzer should
    //produce the expected value
    normalCases.forEach(function(input){
      const answer = fizzBuzzer(input.num);
      answer.should.equal(input.expected);
    });
  });
  //test the error case
  it('should raise error if arg not number', function(){
    //range of bad inputs where both are numbers
    const badInputs = [
      ['a'], [true], ['b']
    ];
    //prove that an error is raised for bad inputs
    badInputs.forEach(function(input){
      (function() {
        fizzBuzzer(input[0]);
      }).should.throw(Error);
    });
  });
});