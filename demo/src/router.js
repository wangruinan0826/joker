import React, { Component } from 'react'
import {HashRouter as Router,Route} from 'react-router-dom'
import App from './App.js'
import Home from './page/Home'
import Student from './page/Student'

class Irouter extends Component {
    render() {
        return (
            <div>
                <Router>
                    <App>
                        <Route path='/home' component={Home}></Route>
                        <Route path='/student' component={Student}></Route>
                    </App>
                </Router>
            </div>
        )
    }
}

export default Irouter;