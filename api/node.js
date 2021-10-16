const axios = require('axios');
require('dotenv').config();

// will set up some arg flags to configure whatever method you are going to use to connect to an Ethereum client
const baseRequest = axios.create({
  baseURL: process.env.INFURA_URL || process.env.ALCHEMY_URL
});

const config = {
  headers: {
    'Content-Type': 'application/json'
  }
};

const node = async (method, ...params) => {
  let body = {
    id: 0,
    jsonrpc: "2.0",
    method,
    params,
  };

  let { data } = await baseRequest.post('', body, config)

  return data;
} 

module.exports = node;