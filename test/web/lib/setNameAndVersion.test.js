var expect = chai.expect;

describe('setNameAndVersion', function() {

  it('Should execute normal behaviors', function(done) {
    var obj = {};
    setNameAndVersion(obj, ['AAA', 'BBB', 'CCC'], 'BBB', '12.3.4');

    expect(obj).to.deep.equal({
      name: 'BBB',
      version: '12.3.4',
      AAA: false,
      BBB: true,
      CCC: false,
    });
    done();
  });

  it('Cannot rewrite properties', function(done) {
    var obj = {};
    setNameAndVersion(obj, ['AAA', 'BBB', 'CCC'], 'BBB', '12.3.4');

    expect(function() { obj.name = 'AAA'; }).to.throws(Error);
    expect(function() { obj.version = '9.9.9'; }).to.throws(Error);
    expect(function() { obj.AAA = true; }).to.throws(Error);
    expect(function() { obj.BBB = false; }).to.throws(Error);
    expect(function() { obj.CCC = true; }).to.throws(Error);

    expect(obj.name).to.equal('BBB')
    expect(obj.version).to.equal('12.3.4')
    expect(obj.AAA).to.be.false;
    expect(obj.BBB).to.be.true;
    expect(obj.CCC).to.be.false;
    done();
  });
});
