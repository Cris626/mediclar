import React from 'react';
import { Redirect, Route, Switch } from 'react-router';

const Main = React.lazy(()=> import('./main'));

const Document = React.lazy(()=> import('./document'));

const Places = React.lazy(()=> import('./places'));

const App = (props) => {
    let authorizationToken = localStorage.getItem("Authorization");
    const {match} = props;
    return(
        <div>
            <Switch>
                <Route
                    path={`${match.url}/form-main`}
                    render={props=>  authorizationToken? <Main {...props}/>: <Redirect to={'/mediclar/admin-login'} />}
                />
                <Route
                    path={`${match.url}/result-document`}
                    render={props=> <Document {...props}/>}
                />
                <Route
                    path={`${match.url}/places`}
                    render={props=> authorizationToken? <Places {...props}/>: <Redirect to='/mediclar/admin-login' />}
                />
            </Switch>
        </div>
    )
}

export default App;