import React from 'react';
import baseComponent from '../common/baseCompent'

import {
	Button,
} from 'react-weui';


// import {
// 	CityPicker,
// 	Picker,
// 	Button,
// 	Toptips
// } from 'react-weui';


class App extends baseComponent {

	constructor(props) {
	    super(props);

	    this.Bmap = null;

	    this.state = {
	    	location : '',
	    	address:null
	    }
	}

	componentDidMount(){
		if (!window.BMap) {
			window.initBmap = this.initMap;
			window.onload = this.asyncMap();
		}else{
			this.initMap();
		}

	}


	asyncMap(){

		let script = document.createElement('script');
		script.type="text/javascript";
		script.src = "http://api.map.baidu.com/api?v=2.0&ak=ibj9ZONdVW7sHQWsZ0pXB6r2piUaH1eq&callback=initBmap";

		document.body.appendChild(script);
	}

	initMap = ()=>{
		const BMap = window.BMap;

		this.Bmap = new BMap.Map("allmap");
		this.Bmap.centerAndZoom(new BMap.Point(116.404, 39.915), 16);

		let geolocation = new BMap.Geolocation();
		this.geoc = new BMap.Geocoder();

		let self = this;
		//定位
		geolocation.getCurrentPosition(function(r){
			if(this.getStatus() === 0){
				self.Bmap.panTo(r.point);
				self.setPoint(r.point);
			}else {
				alert('无法定位到您的当前位置，导航失败，请手动输入您的当前位置');
			}
		},{enableHighAccuracy: true});

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
					<Button onClick={this.submit}>保存</Button>
				</div>
			</div>
	    );
	}
}

export default App;
