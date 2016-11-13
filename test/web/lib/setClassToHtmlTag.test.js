'use strict';

var expect = chai.expect;

describe('setClassToHtmlTag', function() {

  it('Should set names and versions of user agent and OS', function(done) {
    var htmlTag = {};
    var ua = { name: 'FIREFOX', version: '49' };
    var os = { name: 'WINNT', version: '10.0' };

    setClassToHtmlTag(htmlTag, ua, os);

    expect(htmlTag.className).to.equal('FIREFOX FIREFOX-49 WINNT WINNT-10_0');
    done();
  });

  it('Should set only names if versions are not given', function(done) {
    var htmlTag = {};
    var ua = { name: 'FIREFOX'  };
    var os = { name: 'WINNT'  };

    setClassToHtmlTag(htmlTag, ua, os);

    expect(htmlTag.className).to.equal('FIREFOX WINNT');
    done();
  });

  it('Should not remove pre-setted className', function(done) {
    var htmlTag = { className: 'aaa bbb'};
    var ua = { name: 'FIREFOX', version: '49' };
    var os = { name: 'WINNT', version: '10.0' };

    setClassToHtmlTag(htmlTag, ua, os);

    expect(htmlTag.className).to.equal(
      'aaa bbb FIREFOX FIREFOX-49 WINNT WINNT-10_0');
    done();
  });

  it('Should add `IOS` to className if the OS name is iOS', function(done) {
    var htmlTag = {};
    var ua = { name: 'FIREFOX', version: '43'  };
    var os = { name: 'IPHONE', version: '9.0', IOS: true  };

    setClassToHtmlTag(htmlTag, ua, os);

    expect(htmlTag.className).to.equal(
      'FIREFOX FIREFOX-43 IPHONE IPHONE-9_0 IOS');
    done();
  });
});
