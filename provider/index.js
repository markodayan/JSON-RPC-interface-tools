// const createRPCMethod = require('../api/node');
const axios = require('axios');

const config = {
  headers: {
    'Content-Type': 'application/json'
  }
};

function EthereumProvider (url) {
  this.baseClient = axios.create({
    baseURL: url
  });

  this.createRPCMethod = async function (method, params) {
    let body = {
      id: 0,
      jsonrpc: "2.0",
      method,
      params,
    };

    let { data } = await this.baseClient.post('', body, config);
  
    return data;
  }

}

EthereumProvider.prototype.getProof = async function (params = []) {
  return await this.createRPCMethod('eth_getProof', params);
};

EthereumProvider.prototype.getClientVersion = async function (params = []) {
  return await this.createRPCMethod('web3_clientVersion', params);
};

EthereumProvider.prototype.getChainId = async function (params = []) {
  return await this.createRPCMethod('eth_chainId', params);
};

EthereumProvider.prototype.getTransactionReceipt = async function (params = []) {
  return await this.createRPCMethod('eth_getTransactionReceipt', params);
};

EthereumProvider.prototype.getTransactionByBlockNumberAndIndex = async function (params = []) {
  return await this.createRPCMethod('eth_getTransactionByBlockNumberAndIndex', params);
};

EthereumProvider.prototype.getTransactionByBlockHashAndIndex = async function (params = []) {
  return await this.createRPCMethod('eth_getTransactionByBlockHashAndIndex', params);
};

EthereumProvider.prototype.getTransactionByHash = async function (params = []) {
  return await this.createRPCMethod('eth_getTransactionByHash', params);
};

EthereumProvider.prototype.getCode = async function (params = []) {
  return await this.createRPCMethod('eth_getCode', params);
};

EthereumProvider.prototype.getStorageAt = async function (params = []) {
  return await this.createRPCMethod('eth_getStorageAt', params);
};

EthereumProvider.prototype.getBalance = async function (params = []) {
  return await this.createRPCMethod('eth_getBalance', params);
};

EthereumProvider.prototype.sendRawTransaction = async function (params = []) {
  return await this.createRPCMethod('eth_sendRawTransaction', params);
};

EthereumProvider.prototype.getWork = async function (params = []) {
  return await this.createRPCMethod('eth_getWork', params);
};

EthereumProvider.prototype.getHashRate = async function (params = []) {
  return await this.createRPCMethod('eth_getHashRate', params);
};

EthereumProvider.prototype.checkMining = async function (params = []) {
  return await this.createRPCMethod('eth_mining', params);
};

EthereumProvider.prototype.getLogs = async function (params = []) {
  return await this.createRPCMethod('eth_getLogs', params);
};

EthereumProvider.prototype.getFilterChanges = async function (params = []) {
  return await this.createRPCMethod('eth_getFilterChanges', params);
};

EthereumProvider.prototype.uninstallFilter = async function (params = []) {
  return await this.createRPCMethod('eth_uninstallFilter', params);
};

// Only works for Alchemy
EthereumProvider.prototype.newPendingTransactionFilter = async function (params = []) {
  return await this.createRPCMethod('eth_newPendingTransactionFilter', params);
};

EthereumProvider.prototype.createBlockFilter = async function (params = []) {
  return await this.createRPCMethod('eth_newBlockFilter', params);
};

// Only works for Infura
EthereumProvider.prototype.getFilterLogs = async function (params = []) {
  let { result: filterHash } = await this.createBlockFilter();
  return await this.createRPCMethod('eth_getFilterLogs', 
    params.length > 0 ? params : [filterHash]
  );
};

EthereumProvider.prototype.createNewFilter = async function (params = []) {
  return await this.createRPCMethod('eth_newFilter', params);
};

EthereumProvider.prototype.feeHistory = async function (params = []) {
  return await this.createRPCMethod('eth_feeHistory', params);
};

EthereumProvider.prototype.gasPrice = async function (params = []) {
  return await this.createRPCMethod('eth_gasPrice', params);
};

EthereumProvider.prototype.estimateGas = async function (params = []) {
  return await this.createRPCMethod('eth_estimateGas', params);
};

EthereumProvider.prototype.createMessageCall = async function (params = []) {
  return await this.createRPCMethod('eth_call', params);
};

EthereumProvider.prototype.getBlockNumber = async function (params = []) {
  return await this.createRPCMethod('eth_blockNumber', params);
};

// Requires client that holds keys (so not Alchemy or Infura clients)
EthereumProvider.prototype.getAccounts = async function (params = []) {
  return await this.createRPCMethod('eth_accounts', params);
};

EthereumProvider.prototype.getSyncState = async function (params = []) {
  return await this.createRPCMethod('eth_syncing', params);
};

EthereumProvider.prototype.getProtocolVersion = async function (params = []) {
  return await this.createRPCMethod('eth_protocolVersion', params);
};

EthereumProvider.prototype.getUncleCountByBlockNumber = async function (params = []) {
  return await this.createRPCMethod('eth_getUncleCountByBlockNumber', params);
};

EthereumProvider.prototype.getUncleCountByBlockHash = async function (params = []) {
  return await this.createRPCMethod('eth_getUncleCountByBlockHash', params);
};

EthereumProvider.prototype.getBlockTransactionCountByNumber = async function (params = []) {
  return await this.createRPCMethod('eth_getBlockTransactionCountByNumber', params);
};

EthereumProvider.prototype.getBlockTransactionCountByHash = async function (params = []) {
  return await this.createRPCMethod('eth_getBlockTransactionCountByHash', params);
};

EthereumProvider.prototype.getBlockByNumber = async function (params = []) {
  return await this.createRPCMethod('eth_getBlockByNumber', params);
};

EthereumProvider.prototype.getBlockByHash = async function (params = []) {
  return await this.createRPCMethod('eth_getBlockByHash', params);
};

module.exports.EthereumProvider = EthereumProvider;