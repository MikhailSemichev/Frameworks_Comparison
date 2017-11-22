import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

import { observable } from 'mobx';
import { observer } from 'mobx-react';

@observer
class Header extends Component {
    @observable title='Title'
    render() {
        return (
            <div className='header'>
                {this.title}|
                <Link to='/'>Page1</Link>|
                <Link to='/page2'>Page2</Link>
            </div>
        );
    }
}

export default Header;
