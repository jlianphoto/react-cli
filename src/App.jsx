import React from 'react';

import Index from './components/Index/index.jsx'
import './App.css';

class App extends React.Component {
    render() {
        return (
            <div className="App">
               {this.props.children || <Index />}
            </div>
        );
    }
}

module.exports = App;