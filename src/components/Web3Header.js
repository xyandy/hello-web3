import { Button, Col, Row } from 'antd';
import React, { Fragment, useEffect } from 'react';

export default function Web3Header(props) {
  useEffect(() => {
    connectWallet();
  }, []);

  // connectWallet to get account
  const connectWallet = async () => {
    try {
      const { ethereum } = window;
      if (!ethereum || !ethereum.isMetaMask) {
        throw new Error('Please Install MetaMask');
      }

      const accounts = await ethereum.request({
        method: 'eth_requestAccounts'
      });
      if (accounts.length === 0) {
        throw new Error('No Account Found In MetaMask');
      }

      props.setAccount(accounts[0]);
      console.log('connect wallet successfully, account: ' + accounts[0]);
    } catch (err) {
      alert(err);
    }
  };

  return (
    <Fragment>
      <Row>
        <Col span={21}>
          <h1>Hello Web3</h1>
        </Col>
        <Col span={3}>
          <Button type='primary' size='large' onClick={() => connectWallet()}>
            Connect Wallet
          </Button>
        </Col>
      </Row>
    </Fragment>
  );
}
