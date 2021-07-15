import React, { Suspense } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

const ViewUser = React.lazy(()=> import('./views/user'));

const ViewApp = React.lazy(()=> import('./views/app'));

const App = (props) => {
  let data = props;

  function authtoken(){
    if(data.flag){
      return true;
    }else{
      return false;
    }
  }


  return(
    <div>
      <React.Fragment>
        <Suspense>
          <Router history>
            <Switch>
              <Route
                path="/mediclar"
                render={props=> authtoken()?<ViewApp {...props} />:<ViewUser {...props}/>}
              />
              <Route
                path="/"
                render={props=> authtoken()?<ViewUser {...props} />:<ViewUser {...props} />}
              />
            </Switch>
          </Router>
        </Suspense>
      </React.Fragment>
    </div>
  )
}

const mapStateToProps = ({authUser}) => {
  return authUser;
};

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);