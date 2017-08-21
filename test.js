var chai = require('chai')
  , expect = chai.expect
  , should = chai.should();

var stringKeys = require('./keys.js')




describe('stringKeys', function() {
  describe('is function', function() {
    it('should be a function', function() {
      expect(stringKeys).to.be.a('function');
    });
  });
  describe('takes a number as the first argument', function() {
    it('should only take a number as the first argument', function() {
      expect(stringKeys({})).to.equal(-1);
      expect(stringKeys([])).to.equal(-1);
      expect(stringKeys(undefined)).to.equal(-1);
      expect(stringKeys(null)).to.equal(-1);
      expect(stringKeys(true)).to.equal(-1);
      expect(stringKeys(false)).to.equal(-1);
      expect(stringKeys("string")).to.equal(-1);
    });
  });
  describe('takes a string as the second argument', function() {
    it('should only take a string as the second argument', function() {
      expect(stringKeys(2,{})).to.equal(-1);
      expect(stringKeys(2,[])).to.equal(-1);
      expect(stringKeys(2,undefined)).to.equal(-1);
      expect(stringKeys(2,null)).to.equal(-1);
      expect(stringKeys(2,true)).to.equal(-1);
      expect(stringKeys(2,false)).to.equal(-1);
      expect(stringKeys(2,2)).to.equal(-1);
    });
  });
  describe('Creates object with keys of the string', function() {
    it('should take a number and a string and returns an object where the keys are that string, repeated one more each time', function() {
      expect(stringKeys(2, "hello")).to.equal({"hello" : true, "hellohello" : true});
      expect(stringKeys(0, "why")).to.equal({});
      expect(stringKeys(3, "ok")).to.equal({"ok": true, "okok":true, "okokok": true});
    });
  });
});
