import React from 'react';
import baseComponent from '../baseCompent'


class App extends baseComponent {



	render(){
		const {onClick , className , ...others} = this.props;
		return(
			<div className="input-control dropdown" onClick={this.props.onClick}>
				<input type="text" placeholder="省 / 市 / 区"  {...others}/>
			</div>
		)
	}

}

export default App;