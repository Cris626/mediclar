import React from 'react';
import { Route, Switch } from 'react-router-dom';

const Result = React.lazy(()=> import('./result'));

const Document = ({ match }) => (
    <Switch>
        <Route
            exact
            path={`${match.url}`}
            render={props => <Result {...props} />}
        />
    </Switch>
)
export default Document;