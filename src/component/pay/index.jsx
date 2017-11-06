import React from 'react';
import baseComponent from '../common/baseCompent'
import {Switch} from 'react-weui'

import './style.scss'

class Pay extends baseComponent {

	constructor(props) {
	    super(props);
		
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
	      			<span className="money">123</span>
	      		</div>
	      		<p className="discount">
	      			优惠 <b>¥5</b>，
	      			实付 <b>¥15</b> 
	      		</p>
	      		<p className="merchant">商户优惠：满20减5</p>
	      		<div className="invoice">
	      			<span>开发票</span>
	      			<Switch></Switch>
	      			<b>（该商户支持开发票功能）</b>
	      		</div>
	      	</div>

	      	<div className="company">
	      		dafadsadfgong
	      	</div>

      		<table className="keybord">
      			<tbody>
      			<tr>
      				<td>1</td>
      				<td>2</td>
      				<td>3</td>
      				<td>icon</td>
      			</tr>
      			<tr>
      				<td>4</td>
      				<td>5</td>
      				<td>6</td>
      				<td rowSpan="3" className="submit">确定付款</td>
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
	      </div>
	    );
	 }
}

export default Pay;
