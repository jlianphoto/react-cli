import React from 'react';
import baseComponent from '../common/baseCompent'

import {Msg} from 'react-weui';




class App extends baseComponent {

	 render() {
	    return (
	      	<Msg
			    type="success"
			    title="您已提交成功"
			    description="我们会在一个工作日日完成审核，并以短信告知审核结果，请留意！"
			    buttons={[{
			        type: 'primary',
			        label: '确认完成',
			        onClick: ()=>{console.log(1)}
			    }, {
			        type: 'primary',
			        plain:true,
			        label: '修改开店信息',
			        onClick: ()=>{console.log(1)}
			    }]}
			/>
	    );
	 }
}

export default App;
