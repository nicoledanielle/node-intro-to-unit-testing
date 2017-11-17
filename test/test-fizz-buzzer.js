'use strict';

//import chai, declair
const should = require('chai').should();

//import fizzBuzzer
const fizzBuzzer = require('../fizzBuzzer');

//unit tests for our `fizzBuzzer` function
describe ('fizzBuzzer', function(){
  //test the normal case
  it('should divide two numbers'), function(){
    //range of normal inputs, including
    //notable cases
    const normalCases = [
      {num: 15, expected: 'fizz-buzz'},
      {num: 5, expected: 'buzz'},
      {num: 3, expected: 'fizz'},
      {num: '5', expected: Error},
      {num: 1, expected: 1}
    ];
  };
});