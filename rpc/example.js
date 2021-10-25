const createRPCMethod = require('../api/node');

/**
 * Returns the account and storage values of the specified account including the Merkle-proof
 * JSON-RPC Params:
 *  - 1) Address 
 *  - 2) Array of storage-keys to be proofed 
 *  - 3) Block number (or key word)
 * @returns {Promise<Object>}
 */
const getProof = async () => {
  return await createRPCMethod('eth_getProof',
    '0x7F0d15C7FAae65896648C8273B6d7E43f58Fa842',
    ['0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421'],
    'latest'
  );
}

/**
 * Returns the client version 
 * JSON-RPC Params: none
 * @returns {Promise<Object>}
 */
const getClientVersion = async () => {
  return await createRPCMethod('web3_clientVersion');
}

const getChainId = async () => {
  return await createRPCMethod('eth_chainId');
}
 
const getTransactionReceipt = async () => {
  return await createRPCMethod('eth_getTransactionReceipt',
    "0xab059a62e22e230fe0f56d8555340a29b2e9532360368f810595453f6fdd213b"
  );
}

const getTransactionByBlockNumberAndIndex = async () => {
  return await createRPCMethod('eth_getTransactionByBlockNumberAndIndex',
    "latest",
    "0x0"
  );
}

const getTransactionByBlockHashAndIndex = async () => {
  return await createRPCMethod('eth_getTransactionByBlockHashAndIndex',
    "0xc0f4906fea23cf6f3cce98cb44e8e1449e455b28d684dfa9ff65426495584de6",
    "0x0"
  );
}

const getTransactionByHash = async () => {
  return await createRPCMethod('eth_getTransactionByHash',
    "0xce25ece388c74913f28a525fcb5f4cea8b777571f07635c1777a84b15c0ffb8c"
  );
}

const getCode = async () => {
  return await createRPCMethod('eth_getCode',
    "0x6b175474e89094c44da98b954eedeac495271d0f",
    "latest"
  );
}

const getStorageAt = async () => {
  return await createRPCMethod('eth_getStorageAt',
    "0x6b175474e89094c44da98b954eedeac495271d0f",
    "0x05",
    "latest"  
  );
}

const getBalance = async () => {
  return await createRPCMethod('eth_getBalance',
    "0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
    "latest"
  );
}

const sendRawTransaction = async () => {
  return await createRPCMethod('eth_sendRawTransaction',
    "0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675"
  );
}

const getWork = async () => {
  return await createRPCMethod('eth_getWork');
}

const getHashRate = async () => {
  return await createRPCMethod('eth_hashrate');
}

const checkMining = async () => {
  return await createRPCMethod('eth_mining');
}

const getLogs = async () => {
  return await createRPCMethod('eth_getLogs',
  {
    "address": "0xb59f67a8bff5d8cd03f6ac17265c550ed8f33907",
      "topics": [
          "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"
      ],
      "blockHash": "0x8243343df08b9751f5ca0c5f8c9c0460d8a9b6351066fae0acbd4d3e776de8bb"
    }
  );
}

const getFilterChanges = async () => {
  return await createRPCMethod('eth_getFilterChanges',
    "0xfe704947a3cd3ca12541458a4321c869"
  );
}

const uninstallFilter = async () => {
  return await createRPCMethod('eth_uninstallFilter',
    "0xfe704947a3cd3ca12541458a4321c869"
  );
}

// Only works for Alchemy
const newPendingTransactionFilter = async () => {
  return await createRPCMethod('eth_newPendingTransactionFilter');
}

const createBlockFilter = async () => {
  return await createRPCMethod('eth_newBlockFilter');
}

// Only works for Infura
const getFilterLogs = async () => {
  let { result: filterHash } = await createBlockFilter(); 
  return await createRPCMethod('eth_getFilterLogs',
    filterHash
  );
}

const createNewFilter = async () => {
  return await createRPCMethod('eth_newFilter',
    {
      "fromBlock": "0x1",
      "toBlock": "0x2",
      "address": "0x8888f1f195afa192cfee860698584c030f4c9db1",
      "topics": [
          "0x000000000000000000000000a94f5374fce5edbc8e2a8697c15331677e6ebf0b",
          null,
          [
              "0x000000000000000000000000a94f5374fce5edbc8e2a8697c15331677e6ebf0b",
              "0x0000000000000000000000000aff3454fce5edbc8cca8697c15331677e6ebccc"
          ]
      ]
    }
  );
}

const feeHistory = async () => {
  return await createRPCMethod('eth_feeHistory',
    4,
    "latest",
    [25, 75]
  );
}

const gasPrice = async () => {
  return await createRPCMethod('eth_gasPrice');
}

const estimateGas = async () => {
  return await createRPCMethod('eth_estimateGas', 
    {
      "from": "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045",
      "to": "0xd46e8dd67c5d32be8058bb8eb970870f07244567",
      "gas": "0x76c0",
      "gasPrice": "0x9184e72a000",
      "value": "0x9184e72a",
      "data": "0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675"
    },
    "latest"
  );
}

/**
 * Execute a new message call immediately without creating a transaction on the blockchain. 
 * We can use this method to read from the blockchain (including executing smart contracts), but does not publish anything to the blockchain.
 * 
 * JSON-RPC Params: 
 *   1)
*  -   i) Address of transaction sender (from)
 * -  ii) Address of transaction destination (to)
 * - iii) Gas provided for the transaction execution (gas)
 * -  iv) Gas price selected for this transaction (gasPrice)
 * -   v) Value to be sent with transaction (value)
 * -  vi) Hash of the method signature and encoded parameters (data)
 * 
 *  2) block number (or string constant 'latest', 'earliest', 'pending')
 * @returns {Promise<Object>}
 */
const createMessageCall = async () => {
  return await createRPCMethod('eth_call', 
    {
      "from": "0xb60e8dd61c5d32be8058bb8eb970870f07233155",
      "to": "0xd46e8dd67c5d32be8058bb8eb970870f07244567",
      "gas": "0x76c0",
      "gasPrice": "0x9184e72a000",
      "value": "0x9184e72a",
      "data": "0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675"
    },
    "latest"
  );
}

const getBlockNumber = async () => {
  return await createRPCMethod('eth_blockNumber');
}

// Requires client that holds keys (so not Alchemy or Infura clients)
const getAccounts = async () => {
  return await createRPCMethod('eth_accounts');
}

const getSyncState = async () => {
  return await createRPCMethod('eth_syncing');
}

const getProtocolVersion = async () => {
  return await createRPCMethod('eth_protocolVersion');
}

const getUncleCountByBlockNumber = async () => {
  return await createRPCMethod('eth_getUncleCountByBlockNumber',
    "0xCCCF56"
  );
}

const getUncleCountByBlockHash = async () => {
  return await createRPCMethod('eth_getUncleCountByBlockHash',
    "0x9b94c92bbb67eeb5a71ffcccab3390a908e57b5f4780115fd39103dd7200a4a7"
  );
}

const getBlockTransactionCountByNumber = async () => {
  return await createRPCMethod('eth_getBlockTransactionCountByNumber',
  "0xC5D488"
  );
}

const getBlockTransactionCountByHash = async () => {
  return await createRPCMethod('eth_getBlockTransactionCountByHash', 
    "0x9b83c12c69edb74f6c8dd5d052765c1adf940e320bd1291696e6fa07829eee71"
  );
}

const getBlockByNumber = async () => {
  return await createRPCMethod('eth_getBlockByNumber',
    "latest",
    true
  );
}

const getBlockByHash = async () => {
  return await createRPCMethod('eth_getBlockByHash', 
    "0x9b83c12c69edb74f6c8dd5d052765c1adf940e320bd1291696e6fa07829eee71",
    true
  );
}

module.exports = {
  getProof,
  getClientVersion,
  getChainId,
  getTransactionReceipt,
  getTransactionByBlockNumberAndIndex,
  getTransactionByBlockHashAndIndex,
  getTransactionByHash,
  getCode,
  getStorageAt,
  getBalance,
  sendRawTransaction,
  getWork,
  getHashRate,
  checkMining,
  getLogs,
  getFilterChanges,
  uninstallFilter,
  newPendingTransactionFilter,
  getFilterLogs,
  createBlockFilter,
  createNewFilter,
  feeHistory,
  gasPrice,
  estimateGas,
  createMessageCall,
  getBlockNumber,
  getAccounts,
  getSyncState,
  getProtocolVersion,
  getUncleCountByBlockNumber,
  getUncleCountByBlockHash,
  getBlockTransactionCountByNumber,
  getBlockTransactionCountByHash,
  getBlockByNumber,
  getBlockByHash
}