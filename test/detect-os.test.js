'use strict';

var chai = require('chai');
var expect = chai.expect;

var detectOS = require('../src/detect-os');

var userAgentList = require('./fixtures/useragent.data');

describe('detect-os', function() {

  userAgentList.forEach(function(userAgent) {
    var title = userAgent.ua[0] + ' ' + userAgent.ua[1] + ' on ' +
                userAgent.os[0] + ' ' + userAgent.os[1];

    it(title, function() {
      var os = detectOS(userAgent.id.toUpperCase());
      expect(os.name).to.equal(userAgent.os[0]);
      expect(os.version).to.equal(userAgent.os[1]);;
      expectOS(os, userAgent.os[0]);
    });
  });

});

function expectOS(os, name) {
  expect(os.WINNT).to.equal(name === 'WINNT');
  expect(os.MACOS).to.equal(name === 'MACOS');
  expect(os.LINUX).to.equal(name === 'LINUX');
  expect(os.IPHONE).to.equal(name === 'IPHONE');
  expect(os.IPAD).to.equal(name === 'IPAD');
  expect(os.IPOD).to.equal(name === 'IPOD');
  expect(os.ANDROID).to.equal(name === 'ANDROID');
  expect(os.UNKNOWN).to.equal(name === 'UNKNOWN');
  expect(os.IOS).to.equal(
    (name === 'IPHONE') || (name === 'IPAD') || (name === 'IPOD')
  );
}
