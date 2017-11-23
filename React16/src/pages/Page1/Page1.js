import React, { Component } from 'react';
import { observer } from 'mobx-react';

import store from '../../stores/TodoStore';
import TodoItem from './TodoItem';
import './Page1.css';

@observer
class Page1 extends Component {
    render() {
        const { items } = store;

        return (
            <div className='page1'>
                <h1>Page1</h1>
                <div>
                    {items.map(item => (<TodoItem key={item.id} item={item} />))}
                </div>
            </div>
        );
    }
}

export default Page1;
