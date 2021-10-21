const constants  = require('../constants/index');

// Utility methods to interpret results from a JSON-RPC response for the sake of human-readability required by either a direct user or business logic which does not require to speak in hex/encoded formats

/**
 * Parse block data from JSON-RPC raw block response
 * @param {object} block - block object with fields (baseFeePerGas, difficulty, extraData, gasLimit, gasUsed, hash, logsBloom, miner, mixHash, nonce, number, parentHash, receiptsRoot, sha3Uncles, size, stateRoot, timestamp, totalDifficulty, transactions: <Array{}>, transactionsRoot, uncles)
 * @returns {object} - block with parsed hex fields (for certain ones)
 */
 function standardizeBlock (block, keepTx = false) {
   // clone raw block result
  let standardized = { ...block };

  console.log(hexIntegerToDecimal(block.timestamp));
  standardized.number = hexIntegerToDecimal(block.number);
  standardized.difficulty = hexIntegerToDecimal(block.difficulty);
  standardized.gasLimit = hexIntegerToDecimal(block.gasLimit);
  standardized.gasUsed = hexIntegerToDecimal(block.gasUsed);
  standardized.nonce = hexIntegerToDecimal(block.nonce);
  standardized.size = hexIntegerToDecimal(block.size);
  standardized.timestamp = epochToReadable(hexIntegerToDecimal(block.timestamp)) // UNIX Timestamp to human-readable Date

  // extra fields
  standardized.gasUtilizationRatio = gasUsedRatio(standardized.gasUsed, standardized.gasLimit, true);
  standardized.txCount = standardized.transactions.length;

  if(block.baseFeePerGas){
    standardized.baseFeePerGas = hexWeiToGwei(block.baseFeePerGas);
  }

  if (!keepTx) {
    delete standardized.transactions;
  } else {
    // parse transactions of the block
  }

  return standardized;
}

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
 * Convert hexadecimal intger amount (e.g. total gas) to decimal number type
 * @param {string} hexString -e.g. '0x5208'
 * @returns {number} - gas amount - e.g. 21000 gas 
 */
function hexIntegerToDecimal (hexString) {
  return parseInt(hexString, 16);
}

/**
 * Convert timestamp to human-readable date string 
 * @param {number} epoch - UNIX timestamp (e.g. 1634473161)
 * @returns {string} - 2021-10-17T12:19:21.000Z
 */
function epochToReadable (epoch) {
  return new Date(epoch * 1000);
}

/**
 * Return gas utilisation ratio for the block
 * @param {number} used  - gas used (cummulative gas used by txs included in block)
 * @param {number} limit - gas limit (according to block received) 
 * @param {boolean} decimal - option to set true if you want to receive percentage as decimal (e.g 97% -> 0.97)
 * @returns {number} - percentage-readable value by default (e.g. 97%, if decimal true arg added then it becomes 0.97);
 */
function gasUsedRatio (used, limit = constants.GAS_LIMIT, decimal = false) {
  let ratio = Math.floor((used/limit) * 100);
  if (decimal) {
    ratio = +(ratio * 0.01).toFixed(2);
  }

  return ratio
}

module.exports = {
  hexWeiToEther,
  hexWeiToGwei,
  hexIntegerToDecimal,
  standardizeBlock
}