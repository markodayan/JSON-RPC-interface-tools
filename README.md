# Ethereum JSON-RPC API Interface Tools

To communicate with an Ethereum client one must use the transport-agnostic JSON-RPC communication protocol to read and write to the blockchain.

The motives for this protocol being a core part of node communication is rooted in the specification being suitable for the data structures and processing of them required for the lifecycle of the network.

---

## First Things First

Go to `api/node.js` (the file in this repo) and set whatever URL you will point to as your Ethereum Client (by default here I have set an Infura endpoint by means of environment variable, so you can do accordingly too if you wish).
