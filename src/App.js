import React, { Suspense } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import AppLocale from './lang';

const ViewAdminLogin = React.lazy(()=> import('./views/user'));

const ViewApp = React.lazy(()=> import('./views/app'));

const ViewLogin = React.lazy(()=> import('./views/user'));

const App = (props) => {
  // let data = props;

  // function authtoken(){
  //   if(data.flag){
  //     return true;
  //   }else{
  //     return false;
  //   }
  // }

  const { locale } = props;
  const currentAppLocale = AppLocale[locale];

  return(
    <div>
      <IntlProvider
        locale={currentAppLocale.locale}
        messages={currentAppLocale.messages}
      >
        <React.Fragment>
          <Suspense>
            <Router history>
              <Switch>
                <Route
                  path="/mediclar/admin"
                  render={props=><ViewApp {...props}/>}
                />
                <Route
                  path="/mediclar"
                  render={props=> <ViewAdminLogin {...props} />}
                />
                <Route
                  path="/mediclar"
                  render={props=> <ViewLogin {...props}/>}
                />
              </Switch>
            </Router>
          </Suspense>
        </React.Fragment>
      </IntlProvider>
    </div>
  )
}

const mapStateToProps = ({authUser, settings}) => {
  const { locale } = settings;
  return {authUser, locale};
};

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);