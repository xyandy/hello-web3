import { Button, Divider, Table } from 'antd';
import { ethers } from 'ethers';
import React, { Fragment, useEffect, useState } from 'react';
import jsonABI from '../solidity/AddrCounter.json';

const ContractAddr = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
const ContractABI = jsonABI.abi;

export default function Web3Table() {
  const [addrCount, setAddrCount] = useState([]);

  useEffect(() => {
    getCount();
  }, []);

  const columns = [
    {
      title: 'Account',
      dataIndex: 'account',
      key: 'account'
    },
    {
      title: 'Count',
      dataIndex: 'count',
      key: 'count'
    }
  ];

  const addCount = async () => {
    try {
      const { ethereum } = window;
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const address = await signer.getAddress();
      console.log('addCount signer addr: ', address);
      const counterContract = new ethers.Contract(ContractAddr, ContractABI, signer);
      if (!counterContract) {
        throw new Error('fail to get counterContract');
      }
      const tx = await counterContract.addCount();
      tx.wait();
    } catch (err) {
      console.error(err);
    }
  };

  const getCount = async () => {
    try {
      const { ethereum } = window;
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const address = await signer.getAddress();
      const counterContract = new ethers.Contract(ContractAddr, ContractABI, signer);
      if (!counterContract) {
        throw new Error('fail to get counterContract');
      }
      const count = await counterContract.getCount(address);
      console.log(`addr ${address}, count ${count.toNumber()}`);
      setAddrCount([{ key: address, account: address, count: count.toNumber() }]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Fragment>
      <Button size='large' onClick={addCount}>
        Add Count
      </Button>
      <Divider />
      <Table columns={columns} dataSource={addrCount} bordered />
    </Fragment>
  );
}
