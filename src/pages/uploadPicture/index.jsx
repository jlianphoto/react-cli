import React from 'react';
import baseComponent from '../common/baseCompent'

import {Button} from 'react-weui';

import './style.scss'

class upLoadPicture extends baseComponent {

	 render() {
	    return (
	      <div className="upLoadPicture">
	      	<h4>门店照片</h4>
	      	<ul>
	      		<li>
	      			<div className="detail">
	      				<img src={'http://p1.music.126.net/2taxduLYm8_vtG2cM89oOg==/1364493943108516.jpg?param=140y140'}/>

	      				<div className="message">
	      					<p>啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</p>
	      					<p className="state"><span>状态:</span> <span className="success">上传成功</span></p>	
	      				</div>
	      				
	      			</div>
	      			<div className="upload-btn">
	      				<span>上传</span>
	      				<i className="icon-upload"></i>
	      			</div>
	      		</li>
	      		<li>
	      			<div className="detail">
	      				<img src={'http://p1.music.126.net/2taxduLYm8_vtG2cM89oOg==/1364493943108516.jpg?param=140y140'}/>

	      				<div className="message">
	      					<p>啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</p>
	      					<p className="state"><span>状态:</span> <span className="error">上传失败</span></p>	
	      				</div>
	      				
	      			</div>
	      			<div className="upload-btn">
	      				<span>上传</span>
	      				<i className="icon-upload"></i>
	      			</div>
	      		</li>
	      		<li>
	      			<div className="detail">
	      				<img src={'http://p1.music.126.net/2taxduLYm8_vtG2cM89oOg==/1364493943108516.jpg?param=140y140'}/>

	      				<div className="message">
	      					<p>啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</p>
	      					<p className="state"><span>状态:</span> <span>待上传</span></p>	
	      				</div>
	      				
	      			</div>
	      			<div className="upload-btn">
	      				<span>上传</span>
	      				<i className="icon-upload"></i>
	      			</div>
	      		</li>
	      	</ul>

	      	<div className="btn_wrap">
	      		<Button onClick={this.sumbit}>确定</Button>
	      	</div>
	      </div>
	    );
	 }
}

export default upLoadPicture;
