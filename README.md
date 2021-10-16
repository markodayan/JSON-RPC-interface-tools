# Ethereum JSON-RPC API Interface Tools

## A Brief Introduction to JSON-RPC

To communicate with an Ethereum client one must use the transport-agnostic JSON-RPC communication protocol to read and write to the blockchain.

The motives for this protocol being a core part of node communication is rooted in the specification being suitable for the data structures and processing of them required for the lifecycle of the network.

<br>

> JSON-RPC is a stateless, light-weight remote procedure call (RPC) protocol. Primarily this specification defines several data structures and the rules around their processing. It is transport agnostic in that the concepts can be used within the same process, over sockets, over http, or in many various message passing environments. It uses JSON (RFC 4627) as data format.

<br>

<b>Find out more about JSON-RPC [here](https://www.jsonrpc.org/specification)</b>

<br>

---

## First Things First

Create an environment variable called `NODE_CLIENT_URL` and add your HTTP endpoint for your node client (or node-as-a-service) as the value (You can easily do this with Infura or Alchemy so it doesn't matter which you choose).

You can do this by either:

- creating a `.env` file and adding it as a local environment variable (I think you need `dotenv`)
- go to your `.bashrc` or `.zshrc` file and add it there so you can access it across any projects where you would want to use it.

<u>Note:</u> Havn't tested with local network node yet, but should be fine I think you do `geth attach http://localhost:8545` and then you can just set the `NODE_CLIENT_URL` as that. (I'll clone this one my full node machine and check later)

<br>

---

## Purpose and Structure

To connect to an Ethereum full node (be it via Infura, Alchemy or one in your local network) over HTTP and underestand the interface between users on the network. Since most of our breakthroughs in smart contract technology including the evolution of the social layer derive from the achievements of the EVM, I feel it is important to understand this interface.

1. <b>Learn how to speak to an Ethereum node (or see how it is done over JSON-RPC):</b>

- Read data from the Ethereum blockchain (balances, blocks, transactions, fee history, logs)
- Search for data on the blockchain
- Set up and modify filters
- Sign transactions
- Send Transactions
- Querying Node information (client version running, sync state)

2. <b>Learn how libraries together with dapps, wallets and other tooling providers parse EVM blockchain data to serve it to end users and how they sanitise </b>

- (todo): add REST API that serves as buffer zone between a user and the JSON-RPC API

<br>

---

## TypeScript?

Soon maybe, if anything, Ethereum interfacing and bugs seen in the wild have opened my eyes to risks of dynamic typed language use. <u>ESPECIALLY IN FINANCIAL SETTINGS!</u>
