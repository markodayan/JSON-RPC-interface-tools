// Utility methods to interpret results from a JSON-RPC response for the sake of human-readability required by either a direct user or business logic which does not require to speak in hex/encoded formats

/**
 * Convert hex value of Wei amount to ETH
 * @param {string} hexString - hex string Wei value
 * @returns {number} - number ETH value (e.g. 2.234213)
 */
function hexWeiToEther (hexString) {
  let wei = parseInt(hexString, 16);
  return (wei / (10**18));
}

/**
 * Convert hex Wei amount to Gwei (irrelevant whether this is price or not)
 * @param {string} hexString 
 * @returns {number} - number Gwei value (e.g. 21000 x 56 Gwei = 1 176 000 Gwei to send tx at that gas price)
 */
function hexWeiToGwei (hexString) {
  let wei = parseInt(hexString, 16);
  return (wei / (10**9));
}

/**
 * Convert hexadecimal gas amount to decimal number type
 * @param {string} hexString -e.g. '0x5208'
 * @returns {number} - gas amount - e.g. 21000 gas 
 */
function hexGasToDecimal (hexString) {
  return parseInt(hexString, 16);
} 

module.exports = {
  hexWeiToEther,
  hexWeiToGwei,
  hexGasToDecimal
}