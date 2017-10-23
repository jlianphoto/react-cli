import React from 'react';
import baseComponent from '../common/baseCompent'
import { Link } from 'react-router-dom';

class App extends baseComponent {

	constructor(props) {
	    super(props);
		this.aaa();
	    console.log(this);

	    this.state = {
	      test : 'test test test'
	    }
	  }


	  componentDidMount(){
	  	this.axios.get('/openapi/api', {params:{key:'4178fc14b99ae2e286dd680b0a8d9fb7' , info:'您好'}}).then(req=>{
	  		console.log(req)
	  	})
	  }

	 render() {
	    return (
	      <div className="App">
	      	<Link to="/">page1</Link>
	      	<Link to="/page3">page3</Link>
	        <p>page2</p>
	      </div>
	    );
	 }
}

export default App;
