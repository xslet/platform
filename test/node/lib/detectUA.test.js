'use strict';

var detectUA = require('../../../src/lib/detectUA');
var userAgentList = require('../fixtures/userAgent.data');
var chai = require('chai');
var expect = chai.expect;

function expectUA(ua, name) {
  expect(ua.OPERA).to.equal(name === 'OPERA');
  expect(ua.EDGE).to.equal(name === 'EDGE');
  expect(ua.MSIE).to.equal(name === 'MSIE');
  expect(ua.VIVALDI).to.equal(name === 'VIVALDI');
  expect(ua.FIREFOX).to.equal(name === 'FIREFOX');
  expect(ua.CHROME).to.equal(name === 'CHROME');
  expect(ua.SAFARI).to.equal(name === 'SAFARI');
  expect(ua.UNKNOWN).to.equal(name === 'UNKNOWN');
}

describe('detectUA', function() {

  userAgentList.forEach(function(data) {
    var name = data.ua.name + ' ' + data.ua.version + ' on ' +
               data.os.name + ' ' + data.os.version;

    it(name, function(done) {
      var ua = detectUA(data.userAgent.toUpperCase());
      expect(ua.name).to.equal(data.ua.name);
      expect(ua.version).to.equal(data.ua.version);
      expectUA(ua, data.ua.name);
      done();
    });
  });

});

