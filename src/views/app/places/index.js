import React from 'react';
import { Route, Switch } from 'react-router-dom';

const CreatePlaces = React.lazy(()=> import('./createPlaces'));

const Successful = React.lazy(()=> import('./successful'));

const Places = ({ match }) => (
    <Switch>
        <Route
            exact
            path={`${match.url}/register`}
            render={props=> <CreatePlaces {...props} />}
        />
        <Route
            exact
            path={`${match.url}/register-successful`}
            render={props=> <Successful {...props} />}
        />
    </Switch>
)

export default Places;