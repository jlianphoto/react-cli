import React from 'react';
import baseComponent from '../common/baseCompent'
import cnCity from './cnCity'

import {
	CityPicker,
	Picker,
	Button,
	ButtonArea
} from 'react-weui';

import './style.scss';

class App extends baseComponent {

	constructor(props) {
	    super(props);

	    this.state = {
			city_show:false,
			type_show:false,

			city_value:'',
			type_value:'',

			type_group:[
	            {
	                items: [
	                    {
	                        label: 'Item1'
	                    },
	                    {
	                        label: 'Item2 (Disabled)',
	                    },
	                    {
	                        label: 'Item3'
	                    },
	                    {
	                        label: 'Item4'
	                    },
	                    {
	                        label: 'Item5'
	                    }
	                ]
	            }
	        ]
	    }
	  }

	componentDidMount() {
		console.log(this)
	}

	showCityPicker = e=>{
		e.preventDefault();
		this.setState({city_show : true});
	}

	showTypePicker = e=>{
		this.setState({type_show : true});
	}


	typeChangeHandler = selected=>{
		let value = '';
        selected.forEach( (s, i)=> {
            value = this.state.type_group[i]['items'][s].label
        })
        this.setState({
            type_value: value,
            type_show: false
        })
	}




	render() {
	    return (
			<div className="apply-store">

				<section>
					<h4>门店基本信息</h4>
					<div className="input-group">
						<p className="required">店主名</p>
						<input className="input-control" placeholder="例如：肯德基餐厅" type="text"/>
						<p>分店名称</p>
						<input className="input-control" placeholder="例如：广州分店" type="text"/>
					</div>
				</section>
				<section>
					<div className="input-group">
						<p className="required">所在省市区</p>
						<div className="input-control dropdown" onClick={this.showCityPicker}>
							<input type="text" placeholder="省 / 市 / 区" value={this.state.city_value}/>
							<CityPicker
								data={cnCity}
								show={this.state.city_show}
								onCancel={e=>this.setState({city_show: false})}
								onChange={text=>this.setState({city_value: text, city_show: false})}
							></CityPicker>
						</div>
						<p>门店地址</p>
						<input className="input-control" placeholder="例如：广州分店" type="text"/>
						<p className="required">GPS坐标</p>
						<input className="input-control" type="text" placeholder="获取坐标"/>
					</div>
				</section>

				<section>
					<div className="input-group">
						<p className="required">所属类目</p>
						<div className="input-control dropdown" onClick={this.showTypePicker}>
							<input type="text" placeholder="请选择类目" value={this.state.type_value}/>
							<Picker 
								groups={this.state.type_group}
								show={this.state.type_show}
								onCancel={e=>this.setState({type_show: false})}
								onChange={this.typeChangeHandler}
								lang={{leftBtn:'取消' , rightBtn:'确定'}}
								></Picker>

						</div>
						<p className="required">开店人名称</p>
						<input className="input-control" placeholder="请输入开店人名称" type="text"/>
						<p className="required">联系人手机号</p>
						<input className="input-control" type="number" placeholder="请输入手机号"/>
						<p className="required">门店电话</p>
						<input className="input-control" type="number" placeholder="请输入门店电话"/>
						<Button>确定</Button>

					</div>

						
				
				</section>


			</div>
	    );
	}
}

export default App;
