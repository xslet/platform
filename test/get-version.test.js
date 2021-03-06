'use strict';

var getVersion = require('../src/get-version');
var chai = require('chai');
var expect = chai.expect;

describe('get-version', function() {

  it('Should return null if user agent string does not contain key',
  function() {
    expect(getVersion('ABC DEF GHI', 'DDD', 0)).to.be.null;
    expect(getVersion('ABC DEF GHI', 'DDD', 1)).to.be.null;
    expect(getVersion('ABC DEF GHI', 'DDD', 2)).to.be.null;
  });

  it('Should return an empty string if there is no number after key',
  function() {
    expect(getVersion('ABC DEF GHI', 'DE', 0)).to.equal('');
    expect(getVersion('ABC DEF GHI', 'DE', 1)).to.equal('');
    expect(getVersion('ABC DEF GHI', 'DE', 2)).to.equal('');
  });

  it('Should return an empty string if there is number after key and `)`',
  function() {
    expect(getVersion('ABC DEF )123', 'DE', 0)).to.equal('');
    expect(getVersion('ABC DEF )123', 'DE', 1)).to.equal('');
    expect(getVersion('ABC DEF )123', 'DE', 2)).to.equal('');
  });

  it('Should return version number string if there are numbers after key',
  function() {
    expect(getVersion('ABC DEF 12.34.56 GHI', 'DE')).to.equal('12');
    expect(getVersion('ABC DEF 12.34.56 GHI', 'DE', 0)).to.equal('12');
    expect(getVersion('ABC DEF 12.34.56 GHI', 'DE', 1)).to.equal('12');
    expect(getVersion('ABC DEF 12.34.56 GHI', 'DE', 2)).to.equal('12.34');
    expect(getVersion('ABC DEF 12.34.56 GHI', 'DE', 3)).to.equal('12.34.56');

    expect(getVersion('ABC DEF:12.34.56 GHI', 'DE')).to.equal('12');
    expect(getVersion('ABC DEF:12.34.56 GHI', 'DE', 0)).to.equal('12');
    expect(getVersion('ABC DEF:12.34.56 GHI', 'DE', 1)).to.equal('12');
    expect(getVersion('ABC DEF:12.34.56 GHI', 'DE', 2)).to.equal('12.34');
    expect(getVersion('ABC DEF:12.34.56 GHI', 'DE', 3)).to.equal('12.34.56');

    expect(getVersion('ABC DEF  12.34.56 GHI', 'DE')).to.equal('12');
    expect(getVersion('ABC DEF  12.34.56 GHI', 'DE', 0)).to.equal('12');
    expect(getVersion('ABC DEF  12.34.56 GHI', 'DE', 1)).to.equal('12');
    expect(getVersion('ABC DEF  12.34.56 GHI', 'DE', 2)).to.equal('12.34');
    expect(getVersion('ABC DEF  12.34.56 GHI', 'DE', 3)).to.equal('12.34.56');
  });
});
