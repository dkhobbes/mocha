const assert = require('chai').assert;
const sayHello = require('../app').sayHello;
const addNumbers = require('../app').addNumbers;
const app = require('../app.js');

sayHelloResult = app.sayHello();
addNumbersResult = app.addNumbers(5,5);

describe('App', function() {
  describe('sayHello()', function() {
    it('app should return hello', function() {
      assert.equal(sayHelloResult, 'hello');
    });

    it('sayHello should return type of string', function() {
      assert.typeOf(sayHelloResult, 'string');
    });
  });
  
})
