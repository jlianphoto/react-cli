import React from 'react'
import classNames from 'classnames'
import baseComponent from '../common/baseCompent'
import Map from './map'
import cnCity from './cnCity'

import {Form , Input, Select ,FieldItem} from '../common/Form'

import {
	CityPicker,
	Picker,
	Button,
	Toptips
} from 'react-weui';

import './style.scss';

class App extends baseComponent {

	constructor(props) {
	    super(props);

	    this.errorMessage = [];

	    this.state = {
	    	city_show:false,
			type_show:false,
			map_show : false,
			showWarn:false,
			topTipMsg:'',

	    	form :{
	    		hostName:{
					error:false,
	    			rule:{
	    				required : true,
	    				msg:'店主名不能为空'
	    			},
	    			value:''
				},
				ortherName:{
					value:''
				},
	    		city:{
	    			error:false,
	    			rule:{
	    				required : true,
	    				msg:'省市区不能为空'
	    			},
	    			value:''
	    		},
	    		address:{
	    			value:''
				},
				gps:{
					error:false,
	    			value:'',
					rule:{
	    				required : true,
	    				msg:'GPS不能为空'
	    			}
				},
				type:{
					error:false,
	    			rule:{
	    				required : true,
	    				msg:'所属类目不能为空'
	    			},
	    			value:''
				},
				openName:{
					error:false,
	    			value:'',
					rule:{
	    				required : true,
	    				msg:'开店人不能为空'
	    			}
				},
				phone:{
					error:false,
	    			rule:{
	    				required : true,
	    				msg:'手机号码不能为空'
	    			},
	    			value:''
				},
				tel:{
					error:false,
	    			rule:{
	    				required : true,
	    				msg:'门店电话不能为空'
	    			},
	    			value:''
				}
	    	}
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


        const {form} = this.state;

        let newVal = {
			value,
			rule : this.state.form.type.rule,
			error : false
		}

        this.setState({
        	form:{...form,type:newVal},
            type_show: false
        })
	}

	handleChange = (event)=>{
		const target = event.target;
		const name = target.name,
			value = target.type === 'checkbox' ? target.checked : target.value;

		const {form} = this.state;

		let newVal = {
			value,
			rule : this.state.form[name].rule,
			error : false
		}

		this.setState({form:{...form,[name]:newVal}});
	}


	showError = key=>{
		const {form} = this.state;

		let newVal = this.state.form[key];
		newVal.error = true;

		this.setState({form:{...form,[key]:newVal}});
	}


	validate = forms=>{
		let valid = true;
		this.errorMessage = [];
		for(let k in forms){
			if (forms[k].rule) {
				let value = forms[k].value;
				if (value === '' || /^\s+$/.test(value)) {
					this.showError(k);
					this.errorMessage.push(forms[k].rule.msg);
					valid = false;
				}
			}
		}

		return valid;


	}


	sumbit = e=>{
		e.preventDefault();
		this.setState({show:!this.state.show});

		let valid = this.validate(this.state.form);

			if (!valid) {
				let msg = this.errorMessage.length ===1 ? this.errorMessage[0] : '亲, 你有有些信息没有填完整';

				this.setState({
					topTipMsg: msg,
					showWarn: true
				})

				clearTimeout(this.timer);
				this.timer = setTimeout(()=> {
					            this.setState({showWarn: false});
					        }, 1000);
				return
			}

			alert('验证通过')

		

	}

	getAddress = rs=>{
		console.log(rs)
		let {form} = this.state;
		form.gps.value = rs.point.lat + ","+ rs.point.lng;
		// // from.gps.value = 

		this.setState({
			map_show : false,
			form : form
		})

		console.log(this.state.form)
	}




	render() {
	    return (
			<div className="apply-store">
				<Toptips type="warn" show={this.state.showWarn}>{this.state.topTipMsg}</Toptips>
				<Form>
					<section>
						<h4>门店基本信息</h4>
						<div className="input-group">
							<FieldItem label="店主名" required error={this.state.form.hostName.error}>
								<Input placeholder="例如：肯德基餐厅" name="hostName" onChange={this.handleChange}></Input>
							</FieldItem>
							<FieldItem label="分店名称">
								<Input placeholder="例如：广州分店"></Input>
							</FieldItem>
						</div>
					</section>
					<section>
						<div className="input-group">
							<FieldItem label="所在省市区" required error={this.state.form.city.error}>
								<Select onClick={this.showCityPicker} name="cityValue"  placeholder="省 / 市 / 区" value={this.state.form.city.value}></Select>
								<CityPicker
									data={cnCity}
									show={this.state.city_show}
									onCancel={e=>this.setState({city_show: false})}
									onChange={text=>this.setState({city_show: false,form:{...this.state.form,city:{value:text,rule:this.state.form.city.rule,error:false}}})}
								></CityPicker>
							</FieldItem>

							<FieldItem label="门店地址">
								<Input name="address" placeholder="例如：广州分店"></Input>
							</FieldItem>

							<FieldItem label="GPS坐标" required error={this.state.form.gps.error}>
								<Input name="gps" placeholder="获取坐标" value={this.state.form.gps.value} onChange={this.handleChange} readOnly onClick={()=>{this.setState({map_show:true})}}></Input>
							</FieldItem>

						</div>
					</section>

					<section>
						<div className="input-group">
							<FieldItem label="所属类目" required error={this.state.form.type.error}>
								<Select onClick={this.showTypePicker}  placeholder="请选择类目" value={this.state.form.type.value}></Select>
								<Picker 
									groups={this.type_group}
									show={this.state.type_show}
									onCancel={e=>this.setState({type_show: false})}
									onChange={this.typeChangeHandler}
									lang={{leftBtn:'取消' , rightBtn:'确定'}}
									></Picker>
							</FieldItem>

							<FieldItem label="开店人名称" required error={this.state.form.openName.error}>
								<Input placeholder="请输入开店人名称"  name="openName" onChange={this.handleChange}></Input>
							</FieldItem>

							<FieldItem label="联系人手机号" required error={this.state.form.phone.error}>
								<Input placeholder="请输入手机号" type={'number'} name="phone" onChange={this.handleChange}></Input>
							</FieldItem>

							<FieldItem label="门店电话" required error={this.state.form.tel.error}>
								<Input placeholder="请输入门店电话" type={'number'} name="tel" onChange={this.handleChange}></Input>
							</FieldItem>


							<Button onClick={this.sumbit}>确定</Button>

						</div>

					</section>
				</Form>

				<div className={classNames('wrapper-cover' ,{'show' : this.state.map_show})}>
					<Map 
					closeMap={()=>{this.setState({map_show:false})}}
					getAddress={this.getAddress}
					></Map>
				</div> 
			</div>
	    );
	}
}

export default App;
