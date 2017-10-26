import React from 'react';
import baseComponent from '../common/baseCompent'
import cnCity from './cnCity'

import {Form , Input, Select ,FieldItem} from '../common/Form'

import {
	CityPicker,
	Picker,
	Button
} from 'react-weui';

import './style.scss';

class App extends baseComponent {

	constructor(props) {
	    super(props);

	    this.state = {
			city_show:false,
			type_show:false,

			cityValue:'',
			typeValue:'',
			hostName : ''

	    }


	    this.type_group = [
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
            value = this.type_group[i]['items'][s].label
        })
        this.setState({
            typeValue: value,
            type_show: false
        })
	}

	handleChange = (event)=>{
		const target = event.target;
		const name = target.name,
			value = target.type === 'checkbox' ? target.checked : target.value;


		this.setState({[name] : value});
	}


	sumbit = e=>{
		e.preventDefault();
		console.log(this.state);
		this.refs.form.validate(valid=>{
			console.log(valid)
		})
	}




	render() {
	    return (
			<div className="apply-store">
				<Form ref="form">
					<section>
						<h4>门店基本信息</h4>
						<div className="input-group">
							<FieldItem label="店主名" rules={{required:true , pattern:/^1$/ , validator:(val)=>{console.log(val)}}}>
								<Input placeholder="例如：肯德基餐厅" name="hostName" onChange={this.handleChange}></Input>
							</FieldItem>
							<FieldItem label="分店名称">
								<Input placeholder="例如：广州分店"></Input>
							</FieldItem>
						</div>
					</section>
					<section>
						<div className="input-group">
							<FieldItem label="所在省市区" rules={{required:true , pattern:/^1$/ , validator:(val)=>{console.log(val)}}}>
								<Select onClick={this.showCityPicker}  placeholder="省 / 市 / 区" value={this.state.cityValue}></Select>
								<CityPicker
									data={cnCity}
									show={this.state.city_show}
									onCancel={e=>this.setState({city_show: false})}
									onChange={text=>this.setState({cityValue: text, city_show: false})}
								></CityPicker>
							</FieldItem>

							<FieldItem label="门店地址">
								<Input placeholder="例如：广州分店"></Input>
							</FieldItem>

							<FieldItem label="GPS坐标" rules={{required:true}}>
								<Input placeholder="获取坐标"></Input>
							</FieldItem>

						</div>
					</section>

					<section>
						<div className="input-group">
							<FieldItem label="所属类目" rules={{required:true}}>
								<Select onClick={this.showTypePicker}  placeholder="请选择类目" value={this.state.typeValue}></Select>
								<Picker 
									groups={this.type_group}
									show={this.state.type_show}
									onCancel={e=>this.setState({type_show: false})}
									onChange={this.typeChangeHandler}
									lang={{leftBtn:'取消' , rightBtn:'确定'}}
									></Picker>
							</FieldItem>


							<FieldItem label="所属类目" rules={{required:true , pattern:/^1$/ , validator:(val)=>{console.log(val)}}}>
								<Input placeholder="请输入开店人名称"></Input>
							</FieldItem>

							<FieldItem label="开店人名称" rules={{required:true}}>
								<Input placeholder="请输入开店人名称"></Input>
							</FieldItem>

							<FieldItem label="联系人手机号" rules={{required:true}}>
								<Input placeholder="请输入手机号" type={'number'}></Input>
							</FieldItem>

							<FieldItem label="门店电话" rules={{required:true}}>
								<Input placeholder="请输入门店电话" type={'number'}></Input>
							</FieldItem>


							<Button onClick={this.sumbit}>确定</Button>

						</div>

					</section>
				</Form>


			</div>
	    );
	}
}

export default App;
