const axios = require('axios');
require('dotenv').config();

console.log(process.env.INFURA_URL);

const baseRequest = axios.create({
  baseURL: process.env.INFURA_URL || process.env.ALCHEMY_URL
});

const config = {
  headers: {
    'Content-Type': 'application/json'
  }
};

const infura = async (method, ...params) => {
  let body = {
    id: 0,
    jsonrpc: "2.0",
    method,
    params,
  };

  console.log(body);

  return await baseRequest.post('', body, config);
} 

module.exports = infura;