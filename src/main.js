import React from 'react';
import {render} from 'react-dom';
import { Router,Route,browserHistory,hashHistory,IndexRoute} from 'react-router';



/*
* 路由
*/ 
import routes from './router.config'


render(<Router history={hashHistory} routes={routes} />, document.getElementById('app'))
