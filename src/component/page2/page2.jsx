import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class App extends Component {

	constructor(props) {
	    super(props);
	    console.log(this);
	    console.log(props);

	    this.state = {
	      test : 'test test test'
	    }
	  }

	 render() {
	    return (
	      <div className="App">
	      	<Link to="/">page1</Link>
	        <Link to="/page2">page2</Link>
	        <p>page2</p>
	      </div>
	    );
	 }
}

export default App;
