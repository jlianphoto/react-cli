import React from 'react';
import './index.scss'

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: 'Hello World!',
            info: 'Hope you can enjoy your time with React.'
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

module.exports = Index;