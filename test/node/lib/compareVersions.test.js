'use strict';

var compareVersions = require('../../../src/lib/compareVersions');
var chai = require('chai');
var expect = chai.expect;

describe('compareVersions', function() {

  describe('When arguments are illegal types', function() {

    it('Should throw TypeError if version is null', function(done) {
      var obj = { name: 'AAA', version: '10.23' };
      expect(function() {
        compareVersions(obj, 'AAA', null);
      }).throw(TypeError);
      done();
    });

    it('Should return NaN if name is null', function(done) {
      var obj = { name: 'AAA', version: '10.23' };
      var ret = compareVersions(obj, null, '10.23');
      expect(typeof ret === 'number' && isNaN(ret)).to.true;
      done();
    });

    it('Should throw TypeError if obj.version is null', function(done) {
      var obj = { name: 'AAA', version: null };
      expect(function() {
        compareVersions(obj, 'AAA', '10.23');
      }).throw(TypeError);
      done();
    });

  });

  describe('When behaviors are normally', function() {

    it('Should return NaN if obj.name is different from name',
    function(done) {
      var obj = { name: 'AAA', version: '1.23' };
      var ret = compareVersions(obj, 'BBB', '1.23');
      expect(typeof ret === 'number' && isNaN(ret)).to.be.true;
      done();
    });

    it('Should return 0 if obj.name and obj.version equal arguments',
    function(done) {
      var obj = { name: 'AAA', version: '1.23.456' };
      var ret = compareVersions(obj, 'AAA', '1.23.456');
      expect(ret).to.equal(0);
      done();
    });

    it('Should return 0 if obj.name and obj.version equal arguments',
    function(done) {
      var obj = { name: 'AAA', version: '1.23' };
      var ret = compareVersions(obj, 'AAA', '1.23');
      expect(ret).to.equal(0);
      done();
    });

    it('Should return 0 if obj.name and obj.version equal arguments',
    function(done) {
      var obj = { name: 'AAA', version: '1' };
      var ret = compareVersions(obj, 'AAA', '1');
      expect(ret).to.equal(0);
      done();
    });

    it('Should return 0 if obj.name and obj.version equal arguments',
    function(done) {
      var obj = { name: 'AAA', version: '' };
      var ret = compareVersions(obj, 'AAA', '');
      expect(ret).to.equal(0);
      done();
    });

    it('Should return 1 if obj.version greater than version',
    function(done) {
      var obj = { name: 'ABC', version: '0.10.3.8' };
      var ret = compareVersions(obj, 'ABC', '0.10.3.7');
      expect(ret).to.equal(1);
      done();
    });

    it('Should return 1 if obj.version greater than version',
    function(done) {
      var obj = { name: 'ABC', version: '0.10.4.7' };
      var ret = compareVersions(obj, 'ABC', '0.10.3.7');
      expect(ret).to.equal(1);
      done();
    });

    it('Should return 1 if obj.version greater than version',
    function(done) {
      var obj = { name: 'ABC', version: '0.10.3.7' };
      var ret = compareVersions(obj, 'ABC', '0.9.3.7');
      expect(ret).to.equal(1);
      done();
    });

    it('Should return 1 if obj.version greater than version',
    function(done) {
      var obj = { name: 'ABC', version: '2.10.3.7' };
      var ret = compareVersions(obj, 'ABC', '0.10.3.7');
      expect(ret).to.equal(1);
      done();
    });

    it('Should return 1 if obj.version greater than version',
    function(done) {
      var obj = { name: 'ABC', version: '0.10.3.7' };
      var ret = compareVersions(obj, 'ABC', '0.10.3');
      expect(ret).to.equal(1);
      done();
    });

    it('Should return 1 if obj.version greater than version',
    function(done) {
      var obj = { name: 'ABC', version: '0.10.3.7' };
      var ret = compareVersions(obj, 'ABC', '0.10');
      expect(ret).to.equal(1);
      done();
    });

    it('Should return 1 if obj.version greater than version',
    function(done) {
      var obj = { name: 'ABC', version: '0.10.3.7' };
      var ret = compareVersions(obj, 'ABC', '0');
      expect(ret).to.equal(1);
      done();
    });

    it('Should return 1 if obj.version greater than version',
    function(done) {
      var obj = { name: 'ABC', version: '0.10.4.7' };
      var ret = compareVersions(obj, 'ABC', '');
      expect(ret).to.equal(1);
      done();
    });

    it('Should return 1 if obj.version greater than version',
    function(done) {
      var obj = { name: 'ABC', version: '0.10.5' };
      var ret = compareVersions(obj, 'ABC', '0.10.4.7');
      expect(ret).to.equal(1);
      done();
    });

    it('Should return 1 if obj.version greater than version',
    function(done) {
      var obj = { name: 'ABC', version: '0.11' };
      var ret = compareVersions(obj, 'ABC', '0.10.4.7');
      expect(ret).to.equal(1);
      done();
    });

    it('Should return 1 if obj.version greater than version',
    function(done) {
      var obj = { name: 'ABC', version: '1' };
      var ret = compareVersions(obj, 'ABC', '0.10.4.7');
      expect(ret).to.equal(1);
      done();
    });

    it('Should return -1 if obj.version greater than version',
    function(done) {
      var obj = { name: 'ABC', version: '0.10.3.7' };
      var ret = compareVersions(obj, 'ABC', '0.10.3.8');
      expect(ret).to.equal(-1);
      done();
    });

    it('Should return -1 if obj.version greater than version',
    function(done) {
      var obj = { name: 'ABC', version: '0.10.3.7' };
      var ret = compareVersions(obj, 'ABC', '0.10.4.7');
      expect(ret).to.equal(-1);
      done();
    });

    it('Should return -1 if obj.version greater than version',
    function(done) {
      var obj = { name: 'ABC', version: '0.9.3.7' };
      var ret = compareVersions(obj, 'ABC', '0.10.3.7');
      expect(ret).to.equal(-1);
      done();
    });

    it('Should return -1 if obj.version greater than version',
    function(done) {
      var obj = { name: 'ABC', version: '0.10.3.7' };
      var ret = compareVersions(obj, 'ABC', '1.10.3.7');
      expect(ret).to.equal(-1);
      done();
    });

    it('Should return -1 if obj.version greater than version',
    function(done) {
      var obj = { name: 'ABC', version: '0.10.3' };
      var ret = compareVersions(obj, 'ABC', '0.10.3.7');
      expect(ret).to.equal(-1);
      done();
    });

    it('Should return -1 if obj.version greater than version',
    function(done) {
      var obj = { name: 'ABC', version: '0.10' };
      var ret = compareVersions(obj, 'ABC', '0.10.3.7');
      expect(ret).to.equal(-1);
      done();
    });

    it('Should return -1 if obj.version greater than version',
    function(done) {
      var obj = { name: 'ABC', version: '0' };
      var ret = compareVersions(obj, 'ABC', '0.10.3.7');
      expect(ret).to.equal(-1);
      done();
    });

    it('Should return -1 if obj.version greater than version',
    function(done) {
      var obj = { name: 'ABC', version: '' };
      var ret = compareVersions(obj, 'ABC', '0.10.3.7');
      expect(ret).to.equal(-1);
      done();
    });

    it('Should return -1 if obj.version greater than version',
    function(done) {
      var obj = { name: 'ABC', version: '0.10.3.7' };
      var ret = compareVersions(obj, 'ABC', '0.10.4');
      expect(ret).to.equal(-1);
      done();
    });

    it('Should return -1 if obj.version greater than version',
    function(done) {
      var obj = { name: 'ABC', version: '0.10.3.7' };
      var ret = compareVersions(obj, 'ABC', '0.11');
      expect(ret).to.equal(-1);
      done();
    });

    it('Should return -1 if obj.version greater than version',
    function(done) {
      var obj = { name: 'ABC', version: '0.10.3.7' };
      var ret = compareVersions(obj, 'ABC', '1');
      expect(ret).to.equal(-1);
      done();
    });

  });

});
