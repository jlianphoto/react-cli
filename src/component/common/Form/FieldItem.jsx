import React from 'react';
import baseComponent from '../baseCompent'
import PropTypes from 'prop-types';

class App extends baseComponent {

	static propTypes = {
		label : PropTypes.string,
		rule : PropTypes.object
	}

	constructor(props) {
	    super(props);

		this.state = {
			error : false
		}	    
	}


	showError = ()=>{
		this.setState({error : true})
	}

	hideError = ()=>{
		this.setState({error : true})
	}

	render(){
		let Label = null

		if (this.props.label) {
			let required = false;
			if (this.props.rules && this.props.rules.required) required = true;
			
			Label = (<p className={required?'required':''} key="input">{this.props.label}</p>)
		}

		return(
			<div className={this.state.error?'input-error':''}>
				{Label}
				{this.props.children}
			</div>
		)
	}

}

export default App;