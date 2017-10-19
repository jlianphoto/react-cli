import React from 'react';
import baseComponent from '../common/baseCompent'
import { Link } from 'react-router-dom';

class App extends baseComponent {

  constructor(props) {
    super(props);
    console.log(props);

    this.state = {
      test : 'test test test'
    }
  }



  render() {
    return (
      <div className="App">
        <Link to="/">page1</Link>
        <Link to="/page2/www">page2</Link>
        <Link to="/page3">page3</Link>
        <p>{this.state.test}</p>
      </div>
    );
  }
}

export default App;

