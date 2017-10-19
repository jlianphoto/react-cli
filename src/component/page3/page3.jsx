import React from 'react';
import baseComponent from '../common/baseCompent'
import { Link } from 'react-router-dom';

class App extends baseComponent {

	constructor(props) {
	    super(props);
		this.aaa();
	    console.log(this);

	    this.state = {
	      test : 'test3 test3 test3'
	    }
	  }

	 render() {
	    return (
	      <div className="App">
	      	<Link to="/">page1</Link>
	      	<Link to="/page2/234">page2</Link>
	        <p>{this.state.test}</p>
	      </div>
	    );
	 }
}

export default App;
