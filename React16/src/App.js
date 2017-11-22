import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import axios from 'axios';

import './App.css';

import Header from './components/Header/Header';
import Page1 from './pages/Page1/Page1';
import Page2 from './pages/Page2/Page2';

class App extends Component {
    state = { items: [] };

    componentDidMount() {
        function fakeData(count) {
            const result = [];

            for (let i = 0; i < count; i++) {
                result.push({
                    id: i + 1,
                    name: `Todo Item ${i + 1}`,
                    isDone: i % 3 === 0
                });
            }

            return result;
        }

        this.setState({
            items: fakeData(5000)
        });
    }

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

                    <div>
                        {this.state.items.map(item => {
                            return (
                                <div key={item.id} className='todo-item'>
                                    <input type='text' defaultValue={item.name}/>
                                    <input type='checkbox' defaultChecked={item.isDone}/>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default App;
