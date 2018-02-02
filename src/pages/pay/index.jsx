import React from 'react';
import { Link } from 'react-router-dom';
import baseComponent from '../common/baseCompent'
import classNames from 'classnames'
import {Switch , Radio ,Form ,FormCell ,CellBody , CellFooter} from 'react-weui'

import './style.scss'

class Pay extends baseComponent {


	state = {
		money : '',
		show : false,
		showList: false
	}

	keybordEnter = e=>{
		let flag = e.target.className;

		if (!flag.includes('submit') && flag !== 'del') {
			if (parseFloat(this.state.money)>1000) return;
			let money = this.state.money + e.target.innerHTML;
			this.setState({
				money : money
			})
		}
	}


	keybordDel = e=>{
		let money = this.state.money;

		if (money.length === 0) return;
		
		money = money.substring(0,money.length-1);

		this.setState({
			money : money
		})
	}


	showInvoice = e=>{
		this.setState({
			show : e.target.checked
		})
	}

	openCompanyList = ()=>{
		this.setState({
			showList : true
		})
	}

	closeCompanyList = ()=>{
		this.setState({
			showList : false
		})
	}


	payHandler = ()=>{
		console.log(this.state.money)
	}


	selectCompany = e=>{
		console.log(123123)
		console.log(e.target.value)
	}


	render() {
	    return (
	      <div className="pay">
	      	<header>
	      		<img alt="商家图片" src={'http://p1.music.126.net/2taxduLYm8_vtG2cM89oOg==/1364493943108516.jpg?param=140y140'}/>
	      		<h4>海底捞（正佳店）</h4>
	      	</header>
	      	<div className="container">
	      		<div className="input-warpper">
	      			<b>消费金额</b>
	      			<span className="money">{this.state.money}</span>
	      		</div>
	      		<p className="discount">
	      			优惠 <b>¥5</b>，
	      			实付 <b>¥15</b> 
	      		</p>
	      		<p className="merchant">商户优惠：满20减5</p>
	      		<div className="invoice">
	      			<span>开发票</span>
	      			<Switch onChange={this.showInvoice}></Switch>
	      			<b>（该商户支持开发票功能）</b>
	      		</div>
	      	</div>

	      	{this.state.show && 
	      		<div className="company" onClick={this.openCompanyList}>
	      			李仙女有限公司
	      			<i className="icon-right"></i>
	      		</div>
	      	}
	      	

      		<table className="keybord">
      			<tbody onClick={this.keybordEnter}>
      			<tr>
      				<td>1</td>	
      				<td>2</td>
      				<td>3</td>
      				<td className="del" onClick={this.keybordDel}></td>
      			</tr>
      			<tr>
      				<td>4</td>
      				<td>5</td>
      				<td>6</td>
      				<td rowSpan="3" onClick={this.payHandler} className={classNames(['submit' , {'active' : parseFloat(this.state.money)>0}])}>确定付款</td>
      			</tr>
      			<tr>
      				<td>7</td>
      				<td>8</td>
      				<td>9</td>
      			</tr>
      			<tr>
      				<td colSpan="2">0</td>
      				<td>.</td>
      			</tr>
      			</tbody>
      		</table>


      		<div className={classNames(['pay-list' , {active : this.state.showList}])}>
      			<p>
      				<span onClick={this.closeCompanyList}>关闭</span>
      				<span>确定</span>
      			</p>
		      	<Form radio>
	                <FormCell radio>
	                    <CellBody>Option 1</CellBody>
	                    <CellFooter>
	                        <Radio onClick={this.selectCompany} name="radio1" value="1" defaultChecked/>
	                    </CellFooter>
	                </FormCell>
	                <FormCell radio>
	                    <CellBody>Option 2</CellBody>
	                    <CellFooter>
	                        <Radio onClick={this.selectCompany} name="radio1" value="2"/>
	                    </CellFooter>
	                </FormCell>
	            </Form>
	            <Link className="btn-add" to="/apply">+ 添加新的发票抬头</Link>
		    </div>
	      </div>
	    );
	 }
}

export default Pay;
