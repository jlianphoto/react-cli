import React from 'react';
import { render } from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import route from './router'; //路由配置
import store from './store';
// import registerServiceWorker from './registerServiceWorker';]

store.subscribe(function () {
    // console.log(store.getState());
});

render(
    <Provider store={store}>
	    {route}
    </Provider>,
    document.body.appendChild(document.createElement('div'))
);