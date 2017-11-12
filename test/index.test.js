'use strict';

var chai = require('chai');
var expect = chai.expect;
var Browser = require('jsdom-browser');
var browser = new Browser();
var window = browser.newWindow();
var createPlatform = require('../src');

var platform = createPlatform(window);

describe('platform', function() {
  it('Should detect user agent informations', function() {
    expect(platform.ua.name).to.equal('CHROME');
    expect(platform.ua.version).to.equal('59');
    expect(platform.ua.CHROME).to.be.true;
    expect(platform.ua.FIREFOX).to.be.false;
    expect(platform.ua.EDGE).to.be.false;
    expect(platform.ua.MSIE).to.be.false;
    expect(platform.ua.SAFARI).to.be.false;
    expect(platform.ua.OPERA).to.be.false;
    expect(platform.ua.VIVALDI).to.be.false;
    expect(platform.ua.PHANTOMJS).to.be.false;
    expect(platform.ua.UNKNOWN).to.be.false;
    expect(platform.ua.eq('CHROME', '59')).to.be.true;
  });

  it('Should detect OS informations', function() {
    expect(platform.os.name).to.equal('MACOS');
    expect(platform.os.version).to.equal('10.12');
    expect(platform.os.MACOS).to.be.true;
    expect(platform.os.WINNT).to.be.false;
    expect(platform.os.LINUX).to.be.false;
    expect(platform.os.ANDROID).to.be.false;
    expect(platform.os.IOS).to.be.false;
    expect(platform.os.IPHONE).to.be.false;
    expect(platform.os.IPOD).to.be.false;
    expect(platform.os.IPAD).to.be.false;
    expect(platform.os.UNKNOWN).to.be.false;
    expect(platform.os.eq('MACOS', '10.12')).to.be.true;
  });

  it('Should set platform informations to HTML tag', function() {
    var htmlTag = window.document.getElementsByTagName('html')[0];
    var className = ' ' + htmlTag.className + ' ';
    expect(className.includes(' CHROME ')).to.be.true;
    expect(className.includes(' CHROME-59 ')).to.be.true;
    expect(className.includes(' MACOS ')).to.be.true;
    expect(className.includes(' MACOS-10_12 ')).to.be.true;
  });
});
