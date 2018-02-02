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


	render(){
		let Label = null

		if (this.props.label) {
			
			Label = (<p className={this.props.required?'required':''} key="input">{this.props.label}</p>)
		}

		return(
			<div className={this.props.error?'input-error':''}>
				{Label}
				{this.props.children}
			</div>
		)
	}

}

export default App;