/**
 * Convert hex string to decimal string [preserve string type] (Used for RPC body population matters)
 * @param {string} hexString - hexadecimal value string with 0x prefix '0x10'  
 * @returns {string} - e.g. '0x10' to 16 
 */
function hexToDecimalArg(hexString) {
  return parseInt(hexString, 16).toString()
}

/**
 * Convert decimal value (in string or )
 * @param {string | number} decimalString - decimal integer or string 
 * @returns {string} - e.g. 12965000 or '12965000' -> '0xc5d488'
 */
function decimalToHexArg(decimalString) {
  if (isNaN(decimalString)) throw new Error('Invalid decimal string/number input');
  return '0x' + (+decimalString).toString(16);
}


module.exports = {
  hexToDecimalArg,
  decimalToHexArg,
}