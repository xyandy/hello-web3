# hello-web3

## Introduction
This is a Demo Dapp for getting started with Web3, which mainly includes the following aspects:

1. Write a simple solidity smart contract
2. Use hardhat to compile the contract and deploy the contract in localhost
3. Use web frontend to interact with MetaMask, reading and writing the smart contract

## Demo Description

Pictures are as follows:
![web1](./imgs/web1.png)
![web2](./imgs/web2.png)

Use `npm start` cmd to start this project. And you can see two buttons, one is `Collect Wallet` and the other one is `Add Count`

In the beginning, the count of your wallet account is 0. Each time the Add Count button is clicked, the Count will be incremented by 1. And then you will see the latest count number if you refresh your browser


## Knowledge Prerequisite

1. js html css
2. react antd
3. hardhat
4. solidity
5. ethers
6. MetaMask

# Steps to develop the project
1. create react app

  `npx create-react-app hello-web3`
  delete useless files except index.html App.js index.js and make sure you can `npm start` the project

  you can see codes via this commit records
  https://github.com/xuyang1996/hello-web3/tree/b1ca7e4ee8c2a53ba84ec85e0bfe8a187d8f12f3


2. create hardhat environment

  `npm install --save-dev hardhat`
  refer to official doc https://hardhat.org/getting-started/

  you can see codes via this commit records
  https://github.com/xuyang1996/hello-web3/tree/09e7164a60a2ef81c4f0e2b294c6e26f78206038

   
3. write and deploy the smart contract
 
  `npx hardhat node`
  `npx hardhat run scripts/deploy.js --network localhost`
  
  you can see codes via this commit records
  https://github.com/xuyang1996/hello-web3/commit/0c0e8596cc3fc34817a329971680df7549e8d413

4. write basic web front-end ui via react, js and antd
   
  you can see codes via this commit records
  https://github.com/xuyang1996/hello-web3/tree/d326c9164d35f18a3003210d7fdbcf7e4dc3d1da

5. interact with MetaMask, smart contract

  you can see codes via this commit records
  https://github.com/xuyang1996/hello-web3/tree/bf667da0dfa98fcfbd0558f2287d29cb0849d7ab
   

