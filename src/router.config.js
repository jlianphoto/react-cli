
const routes = {
  childRoutes: [{
    path: '/',
    component: require('./App.jsx'),
    childRoutes: [
      require('./components/Login'),
      require('./components/Register'),
    ]
  }]
}



export default routes;
