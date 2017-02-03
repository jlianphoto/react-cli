import React from 'react';
import './Register.css'

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: 'register!',
            info: 'register register register register register register register register.'
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

module.exports = Register;