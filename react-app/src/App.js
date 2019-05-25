import React from 'react';
import {BrowserRouter as Router,Link,Route,Redirect} from 'react-router-dom';
import A from './components/A.js'
import B from './components/B.js'
import C from './components/C.js'
import F from './components/F.js'
import Children from './components/Children.js'
import Home from './components/Home.js'
import store from './store'
import {add,reduce} from './action'
import {connect} from 'react-redux'

let Jump=(props)=>{
    return <Link to={props.to}>{props.children}</Link>
}

function App(props) {
  return (
    <div className="App">
        <div>hahaha</div>
        <div>{props.aa}</div>
        <button onClick={()=>{
            console.log('我要修改num值');
            // store.dispatch(add(2));
            props.add();
        }}>add</button>
        <button onClick={()=>{
            console.log('我要修改num值');
            store.dispatch(reduce(5));
        }}>reduce</button>
        <hr></hr>
        <Router>
            <Link to='/'>首页</Link>
            -------
            <Link to='/a/5'>A页面</Link>
            -------
            <Link to='/b'>B页面</Link>
            -------
            <Link to='/c/777'>C页面</Link>
            -------
            <Link to='/d'>D页面</Link>
            -------
            <Link to='/children'>Children页面</Link>
            -------
            <Link to='/e'>E重定向页面</Link>

            <Route exact path='/' component={Home}></Route>
            <Route exact path='/a/:id' component={A}></Route>
            <Route exact path='/b' component={B}></Route>
            <Route exact path='/c/:num' component={C}></Route>
            <Route exact path='/d' render={()=>{
                return <p>render DDDDDDD</p>
            }}></Route>
            <Route exact path='/children' children={(props)=>{
                let str=props.match?'1111111':'0000000';
                console.log(str)
                return <Children str={str}></Children>
            }}></Route>
            <Route path='/e' render={()=>{
                return <Redirect to='/'></Redirect>
            }}></Route>
            <Jump to='xxx'>xxxxxxx</Jump>
            <hr></hr>
            <F></F>

            {/* <Switch>
              <Route path='/a/:id' component={A}></Route>
              <Route path='/b' component={B}></Route>
              <Route path='/' component={Home}></Route>
            </Switch> */}
        </Router>
    </div>
  );
}
let mapStateToProps=(state)=>{
    return {
        aa:state.num
    }
}

export default connect(mapStateToProps,{add})(App);
