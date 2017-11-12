'use strict';

var setHtmlTagClass = require('../src/set-html-tag-class');
var chai = require('chai');
var expect = chai.expect;

describe('set-html-tag-class', function() {

  it('Should set names and versions of user agent and OS', function() {
    var htmlTag = {};
    var ua = { name: 'FIREFOX', version: '49' };
    var os = { name: 'WINNT', version: '10.0' };

    setHtmlTagClass(htmlTag, ua, os);

    expect(htmlTag.className).to.equal('FIREFOX FIREFOX-49 WINNT WINNT-10_0');
  });

  it('Should set only names if versions are not given', function() {
    var htmlTag = {};
    var ua = { name: 'FIREFOX'  };
    var os = { name: 'WINNT'  };

    setHtmlTagClass(htmlTag, ua, os);

    expect(htmlTag.className).to.equal('FIREFOX WINNT');
  });

  it('Should not remove pre-setted className', function() {
    var htmlTag = { className: 'aaa bbb'};
    var ua = { name: 'FIREFOX', version: '49' };
    var os = { name: 'WINNT', version: '10.0' };

    setHtmlTagClass(htmlTag, ua, os);

    expect(htmlTag.className).to.equal(
      'aaa bbb FIREFOX FIREFOX-49 WINNT WINNT-10_0');
  });

  it('Should add `IOS` to className if the OS name is iOS', function() {
    var htmlTag = {};
    var ua = { name: 'FIREFOX', version: '43'  };
    var os = { name: 'IPHONE', version: '9.0', IOS: true  };

    setHtmlTagClass(htmlTag, ua, os);

    expect(htmlTag.className).to.equal(
      'FIREFOX FIREFOX-43 IPHONE IPHONE-9_0 IOS');
  });
});
