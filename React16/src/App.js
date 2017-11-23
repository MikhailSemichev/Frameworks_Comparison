import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import axios from 'axios';

import './App.css';

import Header from './components/Header/Header';
import Page1 from './pages/Page1/Page1';
import Page2 from './pages/Page2/Page2';

class App extends Component {
    onClick = () => {
        axios.get('/user?ID=12345')
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    };

    render() {
        return (
            <HashRouter>
                <div className='app'>
                    <Header/>
                    <Switch>
                        <Route exact path='/' component={Page1}/>
                        <Route path='/page2' component={Page2}/>
                    </Switch>
                </div>
            </HashRouter>
        );
    }
}

export default App;
