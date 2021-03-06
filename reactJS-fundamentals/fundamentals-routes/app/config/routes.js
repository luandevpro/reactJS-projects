var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
//var hashHistory = ReactRouter.hashHistory;
var browserHistory = ReactRouter.browserHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../components/Main');
var Home = require("../components/Home");
var InnerPage = require("../components/InnerPage");

var routes = (
    <Router history={browserHistory}>
        <Route path='/' component={Main}>
            <IndexRoute path='/home' component={Home} />
            <Route path='/page' component={InnerPage}> </Route>
        </Route>
    </Router>
);
module.exports = routes;
