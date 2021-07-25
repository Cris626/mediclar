import React from 'react';
import { Redirect, Route, Switch } from 'react-router';

const Main = React.lazy(()=> import('./main'));

const Document = React.lazy(()=> import('./document'));

const Places = React.lazy(()=> import('./places'));

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
                <Route
                    path={`${match.url}/places`}
                    render={props=> <Places {...props}/>}
                />
            </Switch>
        </div>
    )
}

export default App;