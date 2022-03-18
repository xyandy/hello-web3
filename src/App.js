import { Divider, Layout } from 'antd';
import 'antd/dist/antd.css';
import { useState } from 'react';
import Web3Header from './components/Web3Header';
import Web3Table from './components/Web3Table';
import './index.css';

const { Header, Content } = Layout;

function App() {
  const [account, setAccount] = useState('');

  return (
    <Layout>
      <Header>
        <Web3Header setAccount={setAccount} />
      </Header>
      <Divider />

      {account.length === 0 ? (
        <h1>Please Collect Wallet</h1>
      ) : (
        <Content>
          <h1>Your Account: {account}</h1>
          <Web3Table />
        </Content>
      )}
    </Layout>
  );
}

export default App;
