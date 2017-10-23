import React from 'react';
import baseComponent from '../common/baseCompent'

import {
	Form, 
	FormCell, 
	CellHeader, 
	CellBody,
	CellFooter,
	Label,
	Input,
	Switch,
	Button 
} from 'react-weui';

import './style.css';

class App extends baseComponent {

	constructor(props) {
	    super(props);

	    this.state = {
	      	money : '',
	      	invoice : ''
	    }
	  }


	handleChange = (event)=>{

		const target = event.target;

		const name = target.name,
			value = target.type === 'checkbox' ? target.checked : target.value;


		this.setState({[name] : value});
	}


	submit = ()=>{
		console.log(this.state)
	}



	render() {
	    return (
			<div>
				<Form className="paymen-panel">
				    <FormCell>
				        <CellHeader>
				            <Label>金额</Label>
				        </CellHeader>
				       	 <CellBody>
				            <Input type="number" placeholder="请输入支付金额" name="money" onChange={this.handleChange}/>
				        </CellBody>
				    </FormCell>
				    <FormCell>
				    	<CellHeader>
				            <Label>商家优惠</Label>
				        </CellHeader>
				        <CellBody>
				        	满50-20
				        </CellBody>
				    </FormCell>
					<FormCell switch>
	                    <CellBody>开发票</CellBody>
	                    <CellFooter>
	                        <Switch name="invoice" onChange={this.handleChange}/>
	                    </CellFooter>
	                </FormCell>
				</Form>
				<div  className="page__bd_spacing">
					<Button className="btn" onClick={this.submit}>立即付款</Button>
				</div>

			</div>
	    );
	}
}

export default App;
