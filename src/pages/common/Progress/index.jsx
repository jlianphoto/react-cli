/*
* Procgress
* 
* Example
*
* import Procgress from './Procgress' 
* Procgress.start();
* Procgress.end();
* 
* 
**/

import './index.css';

let dom = document.createElement('div');

//the object of timeInterval
let timer = null;

let startCount = 0,
	count = 0,
	endCount = 0;

const Progress = {
	start(){
		startCount ++;
		let percent = 0;
		dom.classList.add('weui-progress-bar');
		document.body.appendChild(dom);

		dom.style.width = "0%";
		dom.style.opacity = 1;

		clearInterval(timer);
		timer = setInterval(_=>{
			percent +=10;
			if (percent>90) {
				percent = 95;
				clearInterval(timer);
			}
			dom.style.width = `${percent}%`;
		},200*percent)
	},
	end(){
		clearInterval(timer);

		count++;
		if (count !== startCount) return;

		dom.style.width = '100%';
		
		setTimeout(_=>{

			dom.style.opacity = 0;

			setTimeout(_=>{
				if (endCount !== startCount) return;
				endCount++;
				//Avoid problems caused by asynchronism
				document.body.removeChild(dom);
			},500);

		},500);

	}
}


export default Progress;
