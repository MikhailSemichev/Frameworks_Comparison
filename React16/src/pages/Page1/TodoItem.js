import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
class TodoItem extends Component {
    handleChange = () => {
        this.props.item.isDone = !this.props.item.isDone;
    };

    render() {
        const { item } = this.props;

        return (
            <div className='todo-item'>
                <input type='text' defaultValue={item.name}/>
                <input type='checkbox' checked={item.isDone} onClick={this.handleChange}/>
            </div>
        );
    }
}

export default TodoItem;
