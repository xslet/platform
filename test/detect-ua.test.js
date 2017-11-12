'use strict';

var chai = require('chai');
var expect = chai.expect;
var detectUA = require('../src/detect-ua');
var userAgentList = require('./fixtures/useragent.data');

describe('detect-ua', function() {

  userAgentList.forEach(function(userAgent) {
    var title = userAgent.ua[0] + ' ' + userAgent.ua[1] + ' on ' +
                userAgent.os[0] + ' ' + userAgent.os[1];

    it(title, function() {
      var ua = detectUA(userAgent.id.toUpperCase());
      expect(ua.name).to.equal(userAgent.ua[0]);
      expect(ua.version).to.equal(userAgent.ua[1]);
      expectUA(ua, userAgent.ua[0]);
    });
  });

});

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
