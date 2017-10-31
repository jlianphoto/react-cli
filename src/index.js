import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import route from './router'; //路由配置
import store from './store';
import registerServiceWorker from './registerServiceWorker';

import 'weui';
import './style/base.scss'
// import 'react-weui/build/packages/react-weui.css';

store.subscribe(function () {
    // console.log(store.getState());
});

render(
    <Provider store={store}>
	    {route}
    </Provider>,
    document.body.appendChild(document.createElement('div'))
);