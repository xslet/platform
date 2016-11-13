'use strict';

var detectOS = require('../../../src/lib/detectOS');
var userAgentList = require('../fixtures/userAgent.data');
var chai = require('chai');
var expect = chai.expect;

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

describe('detectOS', function() {

  userAgentList.forEach(function(data) {
    var name = data.ua.name + ' ' + data.ua.version + ' on ' +
               data.os.name + ' ' + data.os.version;

    it(name, function(done) {
      var os = detectOS(data.userAgent.toUpperCase());
      expect(os.name).to.equal(data.os.name);
      expect(os.version).to.equal(data.os.version);
      expectOS(os, data.os.name);
      done();
    });
  });

});
