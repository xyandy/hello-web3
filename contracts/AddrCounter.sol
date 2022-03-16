//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import 'hardhat/console.sol';

contract AddrCounter {
  mapping(address => uint256) public addrCounterMap;

  constructor() {
    console.log('Deploying AddrCounter');
  }

  function addCount() public {
    addrCounterMap[msg.sender] += 1;
  }

  function getCount(address account) public view returns (uint256) {
    return addrCounterMap[account];
  }
}
