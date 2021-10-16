const client = require('./api/node');

(async function () {
  await client("eth_blockNumber");

  // eth_getBlockByHash
  await client("eth_getBlockByHash", "0x9b83c12c69edb74f6c8dd5d052765c1adf940e320bd1291696e6fa07829eee71", true);

  // eth_getBlockByNumber
  await client("eth_getBlockByNumber", "latest", "true");
})();