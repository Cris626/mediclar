import React from 'react';
import { Route, Switch } from 'react-router-dom';

const FormPdf = React.lazy(()=> import('./formPdf'));
const Form = React.lazy(()=> import('./form'));
const ListPatient = React.lazy(()=> import('./listPatient'));

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
        <Route
            exact
            path={`${match.url}/patient-list`}
            render={props => <ListPatient {...props} />}
        />
    </Switch>
)
export default Main;