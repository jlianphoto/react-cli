import React from 'react';
import baseComponent from '../baseCompent'
import PropTypes from 'prop-types';


class App extends baseComponent {

	static propTypes = {
		placeholder : PropTypes.string,
		type : PropTypes.string,
		className : PropTypes.string,
		defaultValue: PropTypes.any,
		maxLength: PropTypes.string,
		disabled: PropTypes.bool,
		onFocus: PropTypes.func,
		onBlur: PropTypes.func,
	}


	static defaultProps = {
		type : 'text',
		className: 'input-control',
		disabled:false
	}




	render(){
		return(
			<input {...this.props}/>
		)
	}

}

export default App;