import React from 'react';
import { Route, Switch } from 'react-router-dom';

const Result = React.lazy(()=> import('./result'));

const ResultHotel = React.lazy(()=> import('./resultHotel'));

const Document = ({ match }) => (
    <Switch>
        <Route
            exact
            path={`${match.url}`}
            render={props => <Result {...props} />}
        />
        <Route
            exact
            path={`${match.url}/hotel`}
            render={props=><ResultHotel {...props} />}
        />
    </Switch>
)
export default Document;