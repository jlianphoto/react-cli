import React from 'react';
import baseComponent from '../common/baseCompent'
import { Link } from 'react-router-dom';

import './style.scss'



class applyList extends baseComponent {

	 render() {
		return (
			<div className="container applyList">
				<Link to="/" className="item">
					<p className="time">申请记录: 2017-10-15 12:33:12</p>
					<div className="i-target">
						<div className="target">
							<img src={'http://p1.music.126.net/2taxduLYm8_vtG2cM89oOg==/1364493943108516.jpg?param=140y140'}/>
							<div className="detail">
								<div className="txt">
									<h3>肯德基(天河店)天河店天河店天河店天河店天河店天河店天河店天河店天河店天河店</h3>
									<p>状态: 等待完善资料后提交审核等待完善资料后提交审核</p>
								</div>
								<i className="icon-right"></i>
							</div>
						</div>
					</div>
				</Link>

				<Link to="/" className="item">
					<p className="time">申请记录: 2017-10-15 12:33:12</p>
					<div className="i-target">
						<div className="target">
							<img src={'http://p1.music.126.net/2taxduLYm8_vtG2cM89oOg==/1364493943108516.jpg?param=140y140'}/>
							<div className="detail">
								<div className="txt">
									<h3>肯德基(天河店)</h3>
									<p>状态: 等待完善资料后提交审核</p>
								</div>
								<i className="icon-right"></i>
							</div>
						</div>
					</div>
				</Link>
			</div>
		);
	 }
}

export default applyList;
