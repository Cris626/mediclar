import React from 'react';
import { Redirect, Route, Switch } from 'react-router';

const Main = React.lazy(()=> import('./main'));

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
            </Switch>
        </div>
    )
}

export default App;