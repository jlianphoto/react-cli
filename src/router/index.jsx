import React from 'react';
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
// import createBrowserHistory from 'history/createBrowserHistory'


import IndexList from '../pages/page1/page1'; //首页组件
import getComponent from './getComponent';






//配置路由
const routes = [
	{ path: '/',
		exact: true,
		component: IndexList
	},
	{ path: '/success',
		exact: false,
		component: (props) => getComponent(props, () => import('../pages/success') , {title:'申请成功'})
	},
	{ path: '/apply',
		exact: false,
		component: (props) => getComponent(props, () => import('../pages/apply') , {title:'申请开店'})
	},
	{ path: '/uploadPicture',
		exact: false,
		component: (props) => getComponent(props, () => import('../pages/uploadPicture') , {title:'申请开店'})
	},
	{ path: '/applyList',
		exact: false,
		component: (props) => getComponent(props, () => import('../pages/applyList') , {title:'开店申请记录'})
	},
	{ path: '/paymentCenter',
		exact: false,
		component: (props) => getComponent(props, () => import('../pages/paymentCenter') , {title:'收银台'})
	},
	{ path: '/pay',
		exact: false,
		component: (props) => getComponent(props, () => import('../pages/pay') , {title:'向商家付款'})
	},
	{ path: '/404',
		exact: false,
		component: (props) => getComponent(props, () => import('../pages/404') , {title:'这个页面失踪好久了'})
	}
];






// var history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory;
// const supportsHistory = 'pushState' in window.history;
// let Router = supportsHistory ? BrowserRouter : HashRouter;

const RouteConfig = (
    <BrowserRouter >
	    <Switch>
		    {routes.map((route, index) => (
			    <Route
				    key={index}
				    path={route.path}
				    exact={route.exact}
				    component={route.component}
			    />
		    ))}
		    <Redirect from='' to="/404" />
	    </Switch>
    </BrowserRouter>
);

export default RouteConfig;