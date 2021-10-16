const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should;
const read = require('../utils/read');

describe('Read Utilities (end-user and business logic)', function () {
  describe('#hexWeiToEther', function () {
    it ('should convert hex Wei value in ETH (e.g. interpreting an account balance)', () => {
      let opt_1 = '0x14b042de864ff3ac42c' // vitalik.eth balance (6106.17344067 ETH)
      let opt_2 = "0x133b0302ff46c69" // joe.eth (0.08660653885 ETH)
      let opt_3 = "0x62d08c5af1807cd" // alice.eth  balance (0.44502158331 ETH)

      let result = read.hexWeiToEther(opt_1);
      assert.typeOf(result, 'number');
      assert.equal(result, 6106.173440668442);

      result = read.hexWeiToEther(opt_2);
      assert.typeOf(result, 'number');
      assert.equal(result, 0.08660653885963787);

      result = read.hexWeiToEther(opt_3);
      assert.typeOf(result, 'number');
      assert.equal(result, 0.44502158331871433);      
    })
  });

  describe('#hexWeiToGwei', function () {   
    it ('should convert hex gas price to Gwei', () => {
      let opt_1 = '0x102f1ed4f7'; // 69.510026487 Gwei
      let opt_2 = '0x103bccac82'; // 69.722745986 Gwei
      let opt_3 = '0xed6b8deca';  // 63.731982026 Gwei

      let result = read.hexWeiToGwei(opt_1);
      assert.typeOf(result, 'number');
      assert.equal(result, 69.510026487);

      result = read.hexWeiToGwei(opt_2);
      assert.typeOf(result, 'number');
      assert.equal(result, 69.722745986);

      result = read.hexWeiToGwei(opt_3);
      assert.typeOf(result, 'number');
      assert.equal(result, 63.731982026);

    })
  });

  describe('#hexIntegerToDecimal', function () {   
    it ('should convert 0x5498 gas amount to its decimal value', () => {
      let opt_1 = '0x5498'; // quoted result from simple ETH tx transfer gas estimation (21656 gas)
      let result = read.hexIntegerToDecimal(opt_1);
      assert.typeOf(result, 'number');
      assert.equal(result, 21656);
    });
  });
});