import { Provider } from 'react-redux';
import 'antd/dist/antd.css';
import store from './redux/store'
import './App.css';
import CakeContainer from './components/CakeContainer.';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';
import { Card, Col, Row } from 'antd'; 

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <Row>
    <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
    <Card title="Hooks">
          <Card type="inner" title="buy Cakes">
            <HooksCakeContainer />
          </Card>
        </Card>
    </Col>
    <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
    <Card title="Class">
          <Card type="inner" title="buy Cakes">
            <CakeContainer />
          </Card>
          <Card type="inner" title="buy iceCream">
            <IceCreamContainer />
          </Card>
        </Card>
    </Col>
    <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
    <Card title="Users">
          <Card type="inner" title="As per prop passed in it">
            <ItemContainer cake />
            <ItemContainer />
          </Card>
        </Card>
    </Col>
  </Row>

        <Card title="As per User input">
          <Card type="inner" title="buy Cakes">
            <NewCakeContainer />
          </Card>
        </Card>
        <Card title="API Data">
          <Card type="inner" title="Names">
          <UserContainer />
          </Card>
        </Card>
      </div>
    </Provider>
  );
}

export default App;
