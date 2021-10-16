const createRPCMethod = require('./api/node');

(async function () {
  createRPCMethod("eth_blockNumber").then(console.log)

  // eth_getBlockByHash
  createRPCMethod(
    "eth_getBlockByHash", "0x9b83c12c69edb74f6c8dd5d052765c1adf940e320bd1291696e6fa07829eee71", 
    true
  ).then(console.log)

  // eth_getBlockByNumber
  await createRPCMethod("eth_getBlockByNumber", "latest", true)
    .then(console.log)
})();
