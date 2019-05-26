import React from 'react';
import './App.css';
import {Row,Col} from 'antd'
import NavLeft from './components/NavLeft'
import CHeader from './components/CHeader'
import CFooter from './components/CFooter'

function App(props) {
  return (
    <div className="App">
        <Row>
          <Col span={4} className='navleft'>
            <NavLeft></NavLeft>
          </Col>
          <Col span={20}>
            <CHeader></CHeader>
            {props.children}
            <CFooter></CFooter>
          </Col>
        </Row>
    </div>
  );
}

export default App;
