import React from 'react';
import baseComponent from '../common/baseCompent'

import {
	Button,
} from 'react-weui';


class App extends baseComponent {

	constructor(props) {
	    super(props);

	    this.Bmap = null;

	    this.state = {
	    	location : '',
	    	address:null,
	    }
	}

	//create the map
	asyncMap(){
		let script = document.createElement('script');
		script.type="text/javascript";
		script.src = "http://api.map.baidu.com/api?v=2.0&ak=ibj9ZONdVW7sHQWsZ0pXB6r2piUaH1eq&callback=initMapFirst";

		document.body.appendChild(script);
	}

	//initialize map
	initMap = (address , city)=>{
		const BMap = window.BMap;
		console.log(address , city)
		this.Bmap = new BMap.Map("allmap");
		this.Bmap.centerAndZoom(new BMap.Point(116.404, 39.915), 16);

		this.geoc = new BMap.Geocoder();

		//解析地址
		let compileAddress = new BMap.Geocoder();
		console.log(address , city)
		compileAddress.getPoint(address , point=>{
			console.log(point)
			if (point) {
				console.log(point ,11)
				this.Bmap.centerAndZoom(point, 16);
				this.setPoint(point)
			}else{
				this.props.toast('无法找到位置 , 请重新输入地址');
			}
		},city)

		//事件
		this.Bmap.addEventListener("dragend", (...ops)=>{
		   	let point = this.Bmap.getCenter();
			this.setPoint(point);
		});
	}




	setPoint = point=>{
		this.geoc.getLocation(point , rs=>{
			this.setState({
				addressComponents : rs.addressComponents,
				location : rs.address,
				address : rs
			})
		})
	}


	submit = ()=>{
		this.props.getAddress(this.state.address);
	}


	render() {
	    return (
			<div className="mapWrapper">
				<h5>请拖动地图选择门店位置 <i className="icon-close" onClick={()=>{this.props.closeMap()}}></i></h5>
				<p>当前位置 : {this.state.location || '定位中...'}</p>
				<div className="allmap">
					<div id="allmap"></div>
					<i className="icon-location"></i>
				</div>
				<div className="button-sp-area">
					<Button onClick={this.submit} disabled={!this.state.address}>保存</Button>
				</div>
			</div>
	    );
	}
}

export default App;
