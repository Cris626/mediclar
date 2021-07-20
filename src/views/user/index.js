import React from 'react';
import { Route, Switch } from 'react-router-dom';

const LoginAdmin = React.lazy(()=> import('./loginAdmin'));

const Login = React.lazy(()=> import('./loginQr'));

const SelectedLang = React.lazy(()=> import('./selectedLang'));

const User = ({ match }) => {
    return(
        <Switch>
            <Route
                path={`${match.url}/admin-login`}
                render={props=> <LoginAdmin {...props} />}
            />
            <Route
                path={`${match.url}/login`}
                render={props=> <Login {...props}/>}
            />
            <Route 
                path={`${match.url}/selected-lang`}
                render={props=> <SelectedLang {...props} />}
            />
        </Switch>
    )
}

export default User;