import React from 'react';
import baseComponent from '../common/baseCompent'
import cnCity from './cnCity'

import {
	CityPicker,
	Button 
} from 'react-weui';

import './style.css';

class App extends baseComponent {

	constructor(props) {
	    super(props);

	    this.state = {
			city_show:false
	    }
	  }


	render() {
	    return (
			<div className="apply-store">
				<section>
					<h4>门店基本信息</h4>
					<div className="input-group">
						<p>店主名</p>
						<input className="input-control" placeholder="例如：肯德基餐厅" type="text"/>
						<p>分店名称</p>
						<input className="input-control" placeholder="例如：广州分店" type="text"/>
					</div>
				</section>
				<section>
					<div className="input-group">
						<p>所在省市区</p>
						<div className="input-control dropdown">
							<input type="text"/>
							<CityPicker
								data={cnCity}
								show={this.state.city_show}
							></CityPicker>
						</div>
						<input className="input-control" placeholder="例如：肯德基餐厅" type="text"/>
						<p>门店地址</p>
						<input className="input-control" placeholder="例如：广州分店" type="text"/>
						<p>GPS坐标</p>
						<div className="input-control">
							<input type="text"/>
						</div>
					</div>
				</section>

				<Button></Button>
			</div>
	    );
	}
}

export default App;
