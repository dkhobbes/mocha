var should = require("should");
var expect = require("chai").expect;
var request = require("request");
var baseUrl = "https://swapi.co/api";
var util = require("util");

describe('return luke', function(){
  it('returns luke skywalker', function(done){
    request.get({ url: baseUrl + '/people/1/'}),
      expect(response.statusCode).to.equal(200);
      console.log(body);
      done();
  });
});
