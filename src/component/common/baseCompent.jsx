import { PureComponent } from 'react';
import axios from 'axios';


class baseComponent extends PureComponent {

	constructor(props) {
	    super(props);
	    this.axios = axios
	}

	aaa(){
		console.log(1)
	}
}

export default baseComponent;
