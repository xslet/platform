
var expect = chai.expect;

var xslet = {};
definePlatform(xslet, window);

var uaName = xslet.platform.ua.name;
var uaVersion = xslet.platform.ua.version;
var greaterUaVersion = '1' + uaVersion;
var lessUaVersion = '0.0';

var osName = xslet.platform.os.name;
var osVersion = xslet.platform.os.version;
var greaterOsVersion = '1' + osVersion;
var lessOsVersion = '0.0';

describe('definePlatform', function() {

  it('xslet.platform.ua.lt', function(done) {
    expect(xslet.platform.ua.lt(uaName, uaVersion)).to.be.false;
    expect(xslet.platform.ua.lt(uaName, greaterUaVersion)).to.be.true;
    expect(xslet.platform.ua.lt(uaName, lessUaVersion)).to.be.false;

    expect(xslet.platform.ua.lt('XXX', uaVersion)).to.be.false;
    expect(xslet.platform.ua.lt('XXX', greaterUaVersion)).to.be.false;
    expect(xslet.platform.ua.lt('XXX', lessUaVersion)).to.be.false;
    done();
  });

  it('xslet.platform.ua.lte', function(done) {
    expect(xslet.platform.ua.lte(uaName, uaVersion)).to.be.true;
    expect(xslet.platform.ua.lte(uaName, greaterUaVersion)).to.be.true;
    expect(xslet.platform.ua.lte(uaName, lessUaVersion)).to.be.false;

    expect(xslet.platform.ua.lte('XXX', uaVersion)).to.be.false;
    expect(xslet.platform.ua.lte('XXX', greaterUaVersion)).to.be.false;
    expect(xslet.platform.ua.lte('XXX', lessUaVersion)).to.be.false;
    done();
  });

  it('xslet.platform.ua.gt', function(done) {
    expect(xslet.platform.ua.gt(uaName, uaVersion)).to.be.false;
    expect(xslet.platform.ua.gt(uaName, greaterUaVersion)).to.be.false;
    expect(xslet.platform.ua.gt(uaName, lessUaVersion)).to.be.true;

    expect(xslet.platform.ua.gt('XXX', uaVersion)).to.be.false;
    expect(xslet.platform.ua.gt('XXX', greaterUaVersion)).to.be.false;
    expect(xslet.platform.ua.gt('XXX', lessUaVersion)).to.be.false;
    done();
  });

  it('xslet.platform.ua.gte', function(done) {
    expect(xslet.platform.ua.gte(uaName, uaVersion)).to.be.true;
    expect(xslet.platform.ua.gte(uaName, greaterUaVersion)).to.be.false;
    expect(xslet.platform.ua.gte(uaName, lessUaVersion)).to.be.true;

    expect(xslet.platform.ua.gte('XXX', uaVersion)).to.be.false;
    expect(xslet.platform.ua.gte('XXX', greaterUaVersion)).to.be.false;
    expect(xslet.platform.ua.gte('XXX', lessUaVersion)).to.be.false;
    done();
  });

  it('xslet.platform.ua.eq', function(done) {
    expect(xslet.platform.ua.eq(uaName, uaVersion)).to.be.true;
    expect(xslet.platform.ua.eq(uaName, greaterUaVersion)).to.be.false;
    expect(xslet.platform.ua.eq(uaName, lessUaVersion)).to.be.false;

    expect(xslet.platform.ua.eq('XXX', uaVersion)).to.be.false;
    expect(xslet.platform.ua.eq('XXX', greaterUaVersion)).to.be.false;
    expect(xslet.platform.ua.eq('XXX', lessUaVersion)).to.be.false;
    done();
  });

  it('xslet.platform.ua.ne', function(done) {
    expect(xslet.platform.ua.ne(uaName, uaVersion)).to.be.false;
    expect(xslet.platform.ua.ne(uaName, greaterUaVersion)).to.be.true;
    expect(xslet.platform.ua.ne(uaName, lessUaVersion)).to.be.true;

    expect(xslet.platform.ua.ne('XXX', uaVersion)).to.be.true;
    expect(xslet.platform.ua.ne('XXX', greaterUaVersion)).to.be.true;
    expect(xslet.platform.ua.ne('XXX', lessUaVersion)).to.be.true;
    done();
  });


  it('xslet.platform.os.lt', function(done) {
    expect(xslet.platform.os.lt(osName, osVersion)).to.be.false;
    expect(xslet.platform.os.lt(osName, greaterOsVersion)).to.be.true;
    expect(xslet.platform.os.lt(osName, lessOsVersion)).to.be.false;

    expect(xslet.platform.os.lt('XXX', osVersion)).to.be.false;
    expect(xslet.platform.os.lt('XXX', greaterOsVersion)).to.be.false;
    expect(xslet.platform.os.lt('XXX', lessOsVersion)).to.be.false;
    done();
  });

  it('xslet.platform.os.lte', function(done) {
    expect(xslet.platform.os.lte(osName, osVersion)).to.be.true;
    expect(xslet.platform.os.lte(osName, greaterOsVersion)).to.be.true;
    expect(xslet.platform.os.lte(osName, lessOsVersion)).to.be.false;

    expect(xslet.platform.os.lte('XXX', osVersion)).to.be.false;
    expect(xslet.platform.os.lte('XXX', greaterOsVersion)).to.be.false;
    expect(xslet.platform.os.lte('XXX', lessOsVersion)).to.be.false;
    done();
  });

  it('xslet.platform.os.gt', function(done) {
    expect(xslet.platform.os.gt(osName, osVersion)).to.be.false;
    expect(xslet.platform.os.gt(osName, greaterOsVersion)).to.be.false;
    expect(xslet.platform.os.gt(osName, lessOsVersion)).to.be.true;

    expect(xslet.platform.os.gt('XXX', osVersion)).to.be.false;
    expect(xslet.platform.os.gt('XXX', greaterOsVersion)).to.be.false;
    expect(xslet.platform.os.gt('XXX', lessOsVersion)).to.be.false;
    done();
  });

  it('xslet.platform.os.gte', function(done) {
    expect(xslet.platform.os.gte(osName, osVersion)).to.be.true;
    expect(xslet.platform.os.gte(osName, greaterOsVersion)).to.be.false;
    expect(xslet.platform.os.gte(osName, lessOsVersion)).to.be.true;

    expect(xslet.platform.os.gte('XXX', osVersion)).to.be.false;
    expect(xslet.platform.os.gte('XXX', greaterOsVersion)).to.be.false;
    expect(xslet.platform.os.gte('XXX', lessOsVersion)).to.be.false;
    done();
  });

  it('xslet.platform.os.eq', function(done) {
    expect(xslet.platform.os.eq(osName, osVersion)).to.be.true;
    expect(xslet.platform.os.eq(osName, greaterOsVersion)).to.be.false;
    expect(xslet.platform.os.eq(osName, lessOsVersion)).to.be.false;

    expect(xslet.platform.os.eq('XXX', osVersion)).to.be.false;
    expect(xslet.platform.os.eq('XXX', greaterOsVersion)).to.be.false;
    expect(xslet.platform.os.eq('XXX', lessOsVersion)).to.be.false;
    done();
  });

  it('xslet.platform.os.ne', function(done) {
    expect(xslet.platform.os.ne(osName, osVersion)).to.be.false;
    expect(xslet.platform.os.ne(osName, greaterOsVersion)).to.be.true;
    expect(xslet.platform.os.ne(osName, lessOsVersion)).to.be.true;

    expect(xslet.platform.os.ne('XXX', osVersion)).to.be.true;
    expect(xslet.platform.os.ne('XXX', greaterOsVersion)).to.be.true;
    expect(xslet.platform.os.ne('XXX', lessOsVersion)).to.be.true;
    done();
  });

});
