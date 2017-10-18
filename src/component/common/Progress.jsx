

let dom = document.createElement('div');

const Progress = {
	start(){
		dom.classList.add('weui-progress__inner-bar');
		document.body.appendChild(dom);
		console.log(this , 123123412341)
	},
	end(){
		console.log('end');
	},
	update(){
		let timer = setInterval(() => {
            percent += Math.floor(Math.random () * 3 + 5);
            if (percent > 95) {
                clearTimer();
            }

        }, 200);
	}
}


export default Progress;
