import React from 'react';
import './Login.css'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: 'Login!',
            info: 'Login Login Login Login Login Login '
        };
    }
    render() {
        return (
            <div id="Hello">
                <div className="msg">{this.state.msg}</div>
                <p className="info">{this.state.info}</p>
            </div>
        );
    }
}

module.exports = Login;