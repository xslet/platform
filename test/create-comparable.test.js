'use strict';

var chai = require('chai');
var expect = chai.expect;

var createComparable = require('../src/create-comparable');

describe('create-comparable', function() {
  var obj = createComparable();
  obj.name = 'MACOS';
  obj.version = '10.11.3';

  var unknown = createComparable();
  unknown.name = 'UNKNOWN';
  unknown.version = '10.11.3';

  describe('.lt', function() {

    it('Should return true when name is same and version is less',
    function() {
      expect(obj.lt('MACOS', '10.11.4')).to.be.true;
      expect(obj.lt('MACOS', '10.12.0')).to.be.true;
      expect(obj.lt('MACOS', '11.1.0')).to.be.true;
    });

    it('Should return false when name is same and version is same',
    function() {
      expect(obj.lt('MACOS', '10.11.3')).be.false;
    });

    it('Should return false when name is same and version is great',
    function() {
      expect(obj.lt('MACOS', '10.11.2')).be.false;
      expect(obj.lt('MACOS', '10.10.4')).be.false;
      expect(obj.lt('MACOS', '9.12.4')).be.false;
    });

    it('Should return false when name is differnt', function() {
      expect(obj.lt('WINNT', '10.11.4')).be.false;
      expect(obj.lt('LINUX', '10.12.0')).be.false;
      expect(obj.lt('IPHONE', '11.1.0')).be.false;
      expect(obj.lt('UNKNOWN', '10.11.3')).be.false;
    });

    it('Should return false when name is UNKNOWN', function() {
      expect(unknown.lt('UNKNOWN', '10.11.4')).be.false;
    });

    it('Should return false when name is illegal format', function() {
      expect(obj.lt('MACOS', '10.11.a')).be.false;
    });
  });

  describe('.lte', function() {

    it('Should return true when name is same and version is less',
    function() {
      expect(obj.lte('MACOS', '10.11.4')).to.be.true;
      expect(obj.lte('MACOS', '10.12.0')).to.be.true;
      expect(obj.lte('MACOS', '11.1.0')).to.be.true;
    });

    it('Should return true when name is same and version is same',
    function() {
      expect(obj.lte('MACOS', '10.11.3')).to.be.true;
    });

    it('Should return false when name is same and version is great',
    function() {
      expect(obj.lte('MACOS', '10.11.2')).be.false;
      expect(obj.lte('MACOS', '10.10.4')).be.false;
      expect(obj.lte('MACOS', '9.12.4')).be.false;
    });

    it('Should return false when name is differnt', function() {
      expect(obj.lte('WINNT', '10.11.4')).be.false;
      expect(obj.lte('LINUX', '10.12.0')).be.false;
      expect(obj.lte('IPHONE', '11.1.0')).be.false;
      expect(obj.lte('UNKNOWN', '10.11.3')).be.false;
    });

    it('Should return false when name is UNKNOWN', function() {
      expect(unknown.lte('UNKNOWN', '10.11.4')).be.false;
    });

    it('Should return false when name is illegal format', function() {
      expect(obj.lte('MACOS', '10.11.a')).be.false;
    });
  });

  describe('.gt', function() {

    it('Should return false when name is same and version is less',
    function() {
      expect(obj.gt('MACOS', '10.11.4')).be.false;
      expect(obj.gt('MACOS', '10.12.0')).be.false;
      expect(obj.gt('MACOS', '11.1.0')).be.false;
    });

    it('Should return false when name is same and version is same',
    function() {
      expect(obj.gt('MACOS', '10.11.3')).be.false;
    });

    it('Should return true when name is same and version is great',
    function() {
      expect(obj.gt('MACOS', '10.11.2')).to.be.true;
      expect(obj.gt('MACOS', '10.10.4')).to.be.true;
      expect(obj.gt('MACOS', '9.12.4')).to.be.true;
    });

    it('Should return false when name is differnt', function() {
      expect(obj.gt('WINNT', '10.11.4')).be.false;
      expect(obj.gt('LINUX', '10.12.0')).be.false;
      expect(obj.gt('IPHONE', '11.1.0')).be.false;
      expect(obj.gt('UNKNOWN', '10.11.3')).be.false;
    });

    it('Should return false when name is UNKNOWN', function() {
      expect(unknown.gt('UNKNOWN', '10.11.4')).be.false;
    });

    it('Should return false when name is illegal format', function() {
      expect(obj.gt('MACOS', '10.11.a')).be.false;
    });
  });

  describe('.gte', function() {

    it('Should return false when name is same and version is less',
    function() {
      expect(obj.gte('MACOS', '10.11.4')).be.false;
      expect(obj.gte('MACOS', '10.12.0')).be.false;
      expect(obj.gte('MACOS', '11.1.0')).be.false;
    });

    it('Should return true when name is same and version is same',
    function() {
      expect(obj.gte('MACOS', '10.11.3')).to.be.true;
    });

    it('Should return true when name is same and version is great',
    function() {
      expect(obj.gte('MACOS', '10.11.2')).to.be.true;
      expect(obj.gte('MACOS', '10.10.4')).to.be.true;
      expect(obj.gte('MACOS', '9.12.4')).to.be.true;
    });

    it('Should return false when name is differnt', function() {
      expect(obj.gte('WINNT', '10.11.4')).be.false;
      expect(obj.gte('LINUX', '10.12.0')).be.false;
      expect(obj.gte('IPHONE', '11.1.0')).be.false;
      expect(obj.gte('UNKNOWN', '10.11.3')).be.false;
    });

    it('Should return false when name is UNKNOWN', function() {
      expect(unknown.gte('UNKNOWN', '10.11.4')).be.false;
    });

    it('Should return false when name is illegal format', function() {
      expect(obj.gte('MACOS', '10.11.a')).be.false;
    });
  });

  describe('.eq', function() {

    it('Should return false when name is same and version is less',
    function() {
      expect(obj.eq('MACOS', '10.11.4')).be.false;
      expect(obj.eq('MACOS', '10.12.0')).be.false;
      expect(obj.eq('MACOS', '11.1.0')).be.false;
    });

    it('Should return true when name is same and version is same',
    function() {
      expect(obj.eq('MACOS', '10.11.3')).to.be.true;
    });

    it('Should return false when name is same and version is great',
    function() {
      expect(obj.eq('MACOS', '10.11.2')).be.false;
      expect(obj.eq('MACOS', '10.10.4')).be.false;
      expect(obj.eq('MACOS', '9.12.4')).be.false;
    });

    it('Should return false when name is differnt', function() {
      expect(obj.eq('WINNT', '10.11.4')).be.false;
      expect(obj.eq('LINUX', '10.12.0')).be.false;
      expect(obj.eq('IPHONE', '11.1.0')).be.false;
      expect(obj.eq('UNKNOWN', '10.11.3')).be.false;
    });

    it('Should return false when name is UNKNOWN', function() {
      expect(unknown.eq('UNKNOWN', '10.11.4')).be.false;
    });

    it('Should return false when name is illegal format', function() {
      expect(obj.eq('MACOS', '10.11.a')).be.false;
    });
  });

  describe('.ne', function() {

    it('Should return true when name is same and version is less',
    function() {
      expect(obj.ne('MACOS', '10.11.4')).to.be.true;
      expect(obj.ne('MACOS', '10.12.0')).to.be.true;
      expect(obj.ne('MACOS', '11.1.0')).to.be.true;
    });

    it('Should return false when name is same and version is same',
    function() {
      expect(obj.ne('MACOS', '10.11.3')).be.false;
    });

    it('Should return false when name is same and version is great',
    function() {
      expect(obj.ne('MACOS', '10.11.2')).to.be.true;
      expect(obj.ne('MACOS', '10.10.4')).to.be.true;
      expect(obj.ne('MACOS', '9.12.4')).to.be.true;
    });

    it('Should return false when name is differnt', function() {
      expect(obj.ne('WINNT', '10.11.4')).to.be.true;
      expect(obj.ne('LINUX', '10.12.0')).to.be.true;
      expect(obj.ne('IPHONE', '11.1.0')).to.be.true;
      expect(obj.ne('UNKNOWN', '10.11.3')).to.be.true;
    });

    it('Should return false when name is UNKNOWN', function() {
      expect(unknown.ne('UNKNOWN', '10.11.4')).to.be.true;
    });

    it('Should return false when name is illegal format', function() {
      expect(obj.ne('MACOS', '10.11.a')).to.be.true;
    });
  });
});
