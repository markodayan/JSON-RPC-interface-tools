const express = require('express');
const createRPCMethod = require('./api/node');

const example = require('./rpc/example');
const { hexIntegerToDecimal } = require('./utils/read');

async function main () {
  example.getProof().then(console.log);
  example.getClientVersion().then(console.log);
  example.getTransactionReceipt().then(console.log);
  example.getTransactionByBlockNumberAndIndex().then(console.log);
  example.getTransactionByBlockHashAndIndex().then(console.log);
  example.getTransactionByHash().then(console.log);
  example.getCode().then(console.log);
  example.getStorageAt().then(console.log);
  example.getBalance().then(console.log);
  example.sendRawTransaction().then(console.log);
  example.getWork().then(console.log);
  example.getHashRate().then(console.log);
  example.checkMining().then(console.log);
  example.getLogs().then(console.log);
  example.getFilterChanges().then(console.log);
  example.createPendingTransactionFilter().then(console.log);
  example.createBlockFilter().then(console.log);
  example.getFilterLogs().then(console.log);
  example.createNewFilter().then(console.log);
  example.gasPrice().then(console.log);
  example.feeHistory().then(console.log);
  example.estimateGas().then((res) => {
    console.log(hexIntegerToDecimal(res.result))
  });
  example.createMessageCall().then(console.log)
  example.getBlockNumber().then(console.log)
  example.getAccounts().then(console.log)
  example.getSyncState().then(console.log)
  example.getProtocolVersion().then(console.log);
  example.getUncleCountByBlockNumber().then(console.log);
  example.getUncleCountByBlockHash().then(console.log);
  example.getBlockTransactionCountByNumber().then(console.log);
  example.getBlockTransactionCountByHash().then(console.log);
  example.getBlockByNumber().then(console.log);
  example.getBlockByHash().then(console.log);
};
