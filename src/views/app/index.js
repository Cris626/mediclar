import React from 'react';
import { Redirect, Route, Switch } from 'react-router';

const Main = React.lazy(()=> import('./main'));

const Document = React.lazy(()=> import('./document'));

const App = (props) => {
    const {match} = props;
    return(
        <div>
            <Switch>
                {/* <Redirect exact from={`${match.url}`} to={`${match.url}/main`} /> */}
                <Route                
                    path={`${match.url}/form-main`}
                    render={props=> <Main {...props}/>}
                />
                <Route
                    path={`${match.url}/result-document`}
                    render={props=> <Document {...props}/>}
                />
            </Switch>
        </div>
    )
}

export default App;