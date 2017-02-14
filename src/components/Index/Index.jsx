import React from 'react';
import { Link } from 'react-router'
import './index.scss'

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: 'Hello World!',
        };
    }
    render() {
        return (
            <div id="Hello">
                <div className="msg">{this.state.msg}</div>
                <ul>
                    <li><Link to="/login">login</Link></li>
                    <li><Link to="/register">register</Link></li>
                </ul>
            </div>
        );
    }
}

module.exports = Index;