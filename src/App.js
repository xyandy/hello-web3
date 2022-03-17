import { Button, Col, Divider, Layout, Row, Table } from 'antd';
import 'antd/dist/antd.css';
import './index.css';

const { Header, Content } = Layout;

function App() {
  const columns = [
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address'
    },
    {
      title: 'Count',
      dataIndex: 'count',
      key: 'count'
    }
  ];
  const data = [
    {
      key: '1',
      count: 2,
      address: '0x237128'
    },
    {
      key: '2',
      count: 42,
      address: '0x123'
    },
    {
      key: '3',
      count: 32,
      address: '0x321'
    }
  ];

  const connectWallet = async () => {
    alert('connectWallet');
  };

  const addCount = async () => {
    alert('addCount');
  };

  return (
    <>
      <Layout>
        <Header>
          <Row>
            <Col span={22}>
              <h1>Hello Web3</h1>
            </Col>
            <Col span={2}>
              <Button type='primary' size='large' onClick={connectWallet}>
                Connect Wallet
              </Button>
            </Col>
          </Row>
        </Header>

        <Content>
          <Divider />
          <Button size='large' onClick={addCount}>
            Add Your Account Count
          </Button>
          <Divider />

          <Table columns={columns} dataSource={data} bordered />
        </Content>
      </Layout>
    </>
  );
}

export default App;
