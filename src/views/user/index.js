import React from 'react';
import { Route, Switch } from 'react-router-dom';

const Login = React.lazy(()=> import('./login'));

const User = ({ match }) => {
    return(
        <Switch>
            <Route
                path={`${match.url}`}
                render={props=> <Login {...props} />}
            />
        </Switch>
    )
}

export default User;