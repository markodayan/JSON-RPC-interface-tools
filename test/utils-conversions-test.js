const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should;
const { hexToDecimalArg, decimalToHexArg } = require('../utils/conversions');

describe('Conversion Utilities (required to create valid argument parameters for JSON-RPC methods)', function () {
  describe('#hexToDecimalArg', function () {
    const opt_1 = '0x10';
    const opt_2 = '0xff'; 
    const opt_3 = '0x4d'; 

    it ('should convert 0x10 string to decimal string 16', () => {
      let result = hexToDecimalArg(opt_1);
      assert.typeOf(result, 'string');
      assert.equal(result, '16');
    });
    
    it ('should convert 0xff string to decimal string 255', () => {
      let result = hexToDecimalArg(opt_2);
      assert.typeOf(result, 'string');
      assert.equal(result, '255');
    });
    
    it ('should convert 0x4d string to decimal string 77', () => {
      let result = hexToDecimalArg(opt_3);
      assert.typeOf(result, 'string');
      assert.equal(result, '77');

    });
  });

  describe('#decimalToHexArg', function () {   
    it ('should convert a decimal number type to a hexadecimal string with 0x prefix', () => {
      const opt_1 = 12965000;
      const opt_2 = 13422422;

      let res_1 = decimalToHexArg(opt_1);
      let res_2 = decimalToHexArg(opt_2);

      assert.typeOf(res_1, 'string');
      assert.equal(res_1, '0xc5d488');

      assert.typeOf(res_2, 'string');
      assert.equal(res_2, '0xcccf56');
    });
    
    it ('should convert a decimal string type to a hexadecimal string with 0x prefix', () => {
      const opt_1 = '12965000';
      const opt_2 = '13422422';

      let res_1 = decimalToHexArg(opt_1);
      let res_2 = decimalToHexArg(opt_2);

      assert.typeOf(res_1, 'string');
      assert.equal(res_1, '0xc5d488');

      assert.typeOf(res_2, 'string');
      assert.equal(res_2, '0xcccf56');
    });

    it ('should throw an error because it is an invalid input to decimalToHexArg()', () => {
      const opt_1= 'hello world';
      const opt_2 = '';

      expect(() => decimalToHexArg(opt_1)).to.throw('Invalid decimal string/number input');
      expect(() => decimalToHexArg(opt_2)).to.throw('Invalid decimal string/number input');
    });

  });
});