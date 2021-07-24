import React from 'react';
import { Route, Switch } from 'react-router-dom';

const FormPdf = React.lazy(()=> import('./formPdf'));
const Form = React.lazy(()=> import('./form'));

const Main = ({ match }) => (
    <Switch>
        <Route
            exact
            path={`${match.url}`}
            render={props => <Form {...props} />}
        />
        <Route 
            exact
            path={`${match.url}/form-resul-pdf`}
            render={props => <FormPdf {...props} />}
        />
    </Switch>
)
export default Main;