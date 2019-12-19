import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import SignIn from '../src/Component/SignIn';
import Signup from '../src/Component/SignUp';
import Dashboard from '../src/Component/Dashboard';
import ForgatePassword from '../src/Component/ForgatePassword';

function Routing() {
    return (
        <Router>
            <Switch>
                <Route path='/' exact component={SignIn} />
                <Route path='/signup' component={Signup} />
                <Route path='/forgatepassword' component={ForgatePassword} />
                <PrivateRoute path='/dashboard' component={Dashboard} />
            </Switch>
        </Router>
    )
}

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        localStorage.getItem('isAuth') ? (
            <Component {...props} />) : (
                <Redirect to={{
                    pathname: '/',
                }} />
            )
    )} />
)

export default Routing;