import React from 'react';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom';
import A from './components/A.js'
import B from './components/B.js'
import C from './components/C.js'
import Home from './components/Home.js'
function App() {
  return (
    <div className="App">
        hahaha
        <Router>
            <Link to='/'>首页</Link>
            -------
            <Link to='/a/5'>A页面</Link>
            -------
            <Link to='/b'>B页面</Link>
            -------
            <Link to='/c/777'>C页面</Link>
            <Route exact path='/' component={Home}></Route>
            <Route path='/a/:id' component={A}></Route>
            <Route path='/b' component={B}></Route>
            <Route path='/c/:num' component={C}></Route>
            {/* <Switch>
              <Route path='/a/:id' component={A}></Route>
              <Route path='/b' component={B}></Route>
              <Route path='/' component={Home}></Route>
            </Switch> */}
        </Router>
    </div>
  );
}

export default App;
