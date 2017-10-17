import React from 'react';
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
// import createBrowserHistory from 'history/createBrowserHistory'


import IndexList from '../component/page1/page1'; //首页组件
import getComponent from './getComponent';






//配置路由
const routes = [
	{ path: '/',
		exact: true,
		component: IndexList
	},
	{ path: '/page2/:username',
		exact: false,
		component: (props) => getComponent(props, () => import('../component/page2/page2'))
	}
];






// var history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory;
// const supportsHistory = 'pushState' in window.history;
// let Router = supportsHistory ? BrowserRouter : HashRouter;

const RouteConfig = (
    <BrowserRouter >
	    <Switch>
	      {/*<Route path="/" exact component={IndexList} />*/}
		    {routes.map((route, index) => (
			    <Route
				    key={index}
				    path={route.path}
				    exact={route.exact}
				    component={route.component}
			    />
		    ))}
		    <Redirect from='' to="/" />
	    </Switch>
    </BrowserRouter>
);

export default RouteConfig;