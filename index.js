require('dotenv').config();

const example = require('./rpc/example');
const { EthereumProvider } = require('./provider/index');

async function main () {
  const provider = new EthereumProvider(process.env.NODE_CLIENT_URL);

  // provider.getProof(
  //   [
  //     '0x7F0d15C7FAae65896648C8273B6d7E43f58Fa842',
  //     ['0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421'],
  //     'latest'
  //   ]
  // ).then(console.log);

  // provider.getClientVersion().then(console.log);

  // provider.getChainId().then(console.log);

  // provider.getTransactionReceipt(
  //   [
  //     "0xab059a62e22e230fe0f56d8555340a29b2e9532360368f810595453f6fdd213b"
  //   ]
  // ).then(console.log);

  
  // provider.getTransactionByBlockNumberAndIndex(
  //   [
  //     "latest",
  //     "0x0"      
  //   ]
  // ).then(console.log);

  // provider.getTransactionByBlockHashAndIndex(
  //   [
  //     "0xc0f4906fea23cf6f3cce98cb44e8e1449e455b28d684dfa9ff65426495584de6",
  //     "0x0"
  //   ]
  // ).then(console.log);

  // provider.getTransactionByHash(
  //   [
  //     "0xce25ece388c74913f28a525fcb5f4cea8b777571f07635c1777a84b15c0ffb8c"
  //   ]
  // ).then(console.log);

  // provider.getCode(
  //   [
  //     "0x6b175474e89094c44da98b954eedeac495271d0f",
  //     "latest"
  //   ]
  // ).then(console.log);

  // provider.getStorageAt(
  //   [
  //     "0x6b175474e89094c44da98b954eedeac495271d0f",
  //     "0x05",
  //     "latest"  
  //   ]
  // ).then(console.log);

  // provider.getBalance(
  //   [
  //     "0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
  //     "latest"
  //   ]
  // ).then(console.log);

  // provider.sendRawTransaction(
  //   [
  //     "0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675"
  //   ]
  // ).then(console.log);

  // provider.getWork().then(console.log);

  // provider.getHashRate().then(console.log);

  // provider.checkMining().then(console.log);

  // provider.getLogs(
  //   [
  //     {
  //       "address": "0xb59f67a8bff5d8cd03f6ac17265c550ed8f33907",
  //       "topics": [
  //           "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"
  //       ],
  //       "blockHash": "0x8243343df08b9751f5ca0c5f8c9c0460d8a9b6351066fae0acbd4d3e776de8bb"
  //     }
  //   ]
  // ).then(console.log);

  // provider.getFilterChanges(
  //   [
  //     "0xfe704947a3cd3ca12541458a4321c869"
  //   ]
  // ).then(console.log);

  // provider.uninstallFilter(
  //   [
  //     "0xfe704947a3cd3ca12541458a4321c869"
  //   ]
  // ).then(console.log);

  // provider.newPendingTransactionFilter().then(console.log);

  // provider.createBlockFilter().then(console.log);

  // provider.getFilterLogs().then(console.log);

  // provider.createNewFilter(
  //   [
  //     {
  //       "fromBlock": "0x1",
  //       "toBlock": "0x2",
  //       "address": "0x8888f1f195afa192cfee860698584c030f4c9db1",
  //       "topics": [
  //         "0x000000000000000000000000a94f5374fce5edbc8e2a8697c15331677e6ebf0b",
  //         null,
  //         [
  //             "0x000000000000000000000000a94f5374fce5edbc8e2a8697c15331677e6ebf0b",
  //             "0x0000000000000000000000000aff3454fce5edbc8cca8697c15331677e6ebccc"
  //         ]
  //       ]
  //     }      
  //   ]
  // ).then(console.log);

  // provider.feeHistory(
  //   [
  //     4,
  //     "latest",
  //     [25, 75]  
  //   ]
  // ).then(console.log);

  // provider.gasPrice().then(console.log);

  // provider.estimateGas(
  //   [
  //     {
  //       "from": "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045",
  //       "to": "0xd46e8dd67c5d32be8058bb8eb970870f07244567",
  //       "gas": "0x76c0",
  //       "gasPrice": "0x9184e72a000",
  //       "value": "0x9184e72a",
  //       "data": "0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675"
  //     },
  //     "latest"      
  //   ]
  // ).then(console.log);

  // provider.createMessageCall(
  //   [
  //     {
  //       "from": "0xb60e8dd61c5d32be8058bb8eb970870f07233155",
  //       "to": "0xd46e8dd67c5d32be8058bb8eb970870f07244567",
  //       "gas": "0x76c0",
  //       "gasPrice": "0x9184e72a000",
  //       "value": "0x9184e72a",
  //       "data": "0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675"
  //     },
  //     "latest"
  //   ]
  // ).then(console.log);

  // provider.getBlockNumber().then(console.log);

  // provider.getAccounts().then(console.log);

  // provider.getSyncState().then(console.log);

  // provider.getProtocolVersion().then(console.log);

  // provider.getUncleCountByBlockNumber(
  //   [
  //     "0xCCCF56"
  //   ]
  // ).then(console.log);

  // provider.getUncleCountByBlockHash(
  //   [
  //     "0x9b94c92bbb67eeb5a71ffcccab3390a908e57b5f4780115fd39103dd7200a4a7"
  //   ]
  // ).then(console.log);

  // provider.getBlockTransactionCountByNumber(
  //   [
  //     "0xC5D488"
  //   ]
  // ).then(console.log);

  // provider.getBlockTransactionCountByHash(
  //   [
  //     "0x9b83c12c69edb74f6c8dd5d052765c1adf940e320bd1291696e6fa07829eee71"
  //   ]
  // ).then(console.log);

  // provider.getBlockByNumber(
  //   [
  //     "latest",
  //     true
  //   ]
  // ).then(console.log);

  provider.getBlockByHash(
    [
      "0x9b83c12c69edb74f6c8dd5d052765c1adf940e320bd1291696e6fa07829eee71",
      true
    ]
  ).then(console.log);

  // example.getProof().then(console.log);
  // example.getClientVersion().then(console.log);
  // example.getTransactionReceipt().then(console.log);
  // example.getTransactionByBlockNumberAndIndex().then(console.log);
  // example.getTransactionByBlockHashAndIndex().then(console.log);
  // example.getTransactionByHash().then(console.log);
  // example.getCode().then(console.log);
  // example.getStorageAt().then(console.log);
  // example.getBalance().then(console.log);
  // example.sendRawTransaction().then(console.log);
  // example.getWork().then(console.log);
  // example.getHashRate().then(console.log);
  // example.checkMining().then(console.log);
  // example.getLogs().then(console.log);
  // example.getFilterChanges().then(console.log);
  // example.createPendingTransactionFilter().then(console.log);
  // example.createBlockFilter().then(console.log);
  // example.getFilterLogs().then(console.log);
  // example.createNewFilter().then(console.log);
  // example.gasPrice().then(console.log);
  // example.feeHistory().then(console.log);
  // example.estimateGas().then((res) => {
  //   console.log(hexIntegerToDecimal(res.result))
  // });
  // example.createMessageCall().then(console.log)
  // example.getBlockNumber().then(console.log)
  // example.getAccounts().then(console.log)
  // example.getSyncState().then(console.log)
  // example.getProtocolVersion().then(console.log);
  // example.getUncleCountByBlockNumber().then(console.log);
  // example.getUncleCountByBlockHash().then(console.log);
  // example.getBlockTransactionCountByNumber().then(console.log);
  // example.getBlockTransactionCountByHash().then(console.log);
  // example.getBlockByNumber().then(res => {
  //   console.log(standardizeBlock(res.result))
  // });
  // example.getBlockByHash().then(console.log);

};


main().then()