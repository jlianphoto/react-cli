import React from 'react';
import baseComponent from '../baseCompent'
import PropTypes from 'prop-types';


class App extends baseComponent {

	static propTypes = {
		onValid : PropTypes.func

	}


	constructor(props) {
	    super(props);
	    console.log(this)

	    this.children = [];
	    
	}

	 findChildren = ()=>{

	 	const _find = prop=>{
	 		if (Array.isArray(prop.children) && prop.children.length>0) {
		 		prop.children.forEach(item=>{
		 			if (item.props.rules) {
		 				this.children.push(item);
		 			}


		 			_find(item.props)

		 		})
		 	}else if(prop.children && prop.children.props){
		 		_find(prop.children.props)
		 	}
	 	}

	 	_find(this.props)
	 	
	 	
	}

	validate = fn =>{
		this.findChildren(this.props);
		
		this.children.forEach(child=>{
			console.log(child.props)

		})

		//valid
		let valid = 'dashadaio'
		fn && fn(valid)
	}


	render(){
		return(
			<form>
				{this.props.children}
			</form>
		)
	}

}

export default App;