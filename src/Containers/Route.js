import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Home from './Home';
import Login from './Login';

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        (localStorage.getItem('token') ? (
          <Home>
            <Component {...props} />
          </Home>
        ) : (
          <Redirect
            to={{
              pathname: '/login',
            }}
          />
        ))
      }
    />
  );

class Routes extends React.Component{

    render = () => (
        <Switch>
            <Route path='/login' component={Login}/>
            <Route path='/asd' component={Home}/>
            <PrivateRoute path='/' component={Home}/>
        </Switch>
    )
}

export default Routes;