import React from 'react';
import './App.css';
import {Row,Col} from 'antd'
import NavLeft from './components/NavLeft'
import CHeader from './components/CHeader'
import CFooter from './components/CFooter'
import Home from './page/Home/index'

function App() {
  return (
    <div className="App">
        <Row>
          <Col span={4} className='navleft'>
            <NavLeft></NavLeft>
          </Col>
          <Col span={20}>
            <CHeader></CHeader>
            <Home></Home>
            <CFooter/>
          </Col>
        </Row>
    </div>
  );
}

export default App;
