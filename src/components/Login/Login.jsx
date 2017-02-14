import React from 'react';
import './Login.css'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: 'Login!',
            info: 'Lists and Keys(列表渲染) ',
            list:["test","test","test","test","test","test","test","test","test","test","test"]
        };

        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        var list = this.state.list.map((item,index) => {
            return <li key={index}>{item}</li>
        })

        return (
            <div id="Hello">
                <div className="msg">{this.state.msg}</div>
                <p className="info">{this.state.info}</p>
                <ul>{list}</ul>

                <button className="btn" onClick={this.handleClick}>click</button>
            </div>
        );
    }

    // mount
    componentDidMount() {
        console.log('mount')
    }

    // event
    handleClick() {
        alert("click");
        console.log(this);
    }

}

module.exports = Login;