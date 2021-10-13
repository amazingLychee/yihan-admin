import React, { Component } from 'react';
import './App.css';
import { Router, Route, Switch } from 'react-router-dom';
import Login from './pages/login/login'
import Admin from './pages/admin/admin'
import history from './history';

class App extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/login"  component={Login}/>
                    <Route exact path="/admin"  component={Admin}/>
                </Switch>
            </Router>
        );
    }
}

export default App;

// 初始化
