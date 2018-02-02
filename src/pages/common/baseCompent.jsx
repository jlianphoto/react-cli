import { PureComponent } from 'react';
import axios from 'axios';


//global interceptors
axios.interceptors.response.use(function (response) {
	console.log(response,'interceptors')
	return response;
}, function (error) {
	// Do something with response error
	return Promise.reject(error);
});


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
