//路由异步加载
import React, { Component } from 'react';
import Progress from '../component/common/Progress/index'


class Bundle extends Component {
	constructor (...args){
		super(...args);

		this.state = {
			mod: null
		};
	}
	componentWillMount() {
		this.load(this.props)
		Progress.start();
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.load !== this.props.load) {
			this.load(nextProps)
		}
	}

	load(props) {
		this.setState({
			mod: null
		})
		props.load().then((mod) => {
			this.setState({
				// handle both es imports and cjs
				mod: mod ? mod.default : mod
			})

			document.title = props.$route.title || 'react-demo-by-jlian';
			Progress.end();
			
		}).catch(err => console.log('Failed to load module', err));
	}

	render() {
		if (!this.state.mod) return false;
		return this.props.children(this.state.mod, this.props);
	}
}


export default function getComponent(props, ComponentFunc , meta) {
	return (
		<Bundle $route={meta} load={ComponentFunc} {...props}>
			{(Module, props) => <Module {...props}/>}
		</Bundle>
	)
}