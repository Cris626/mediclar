import React, { Suspense } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import AppLocale from './lang';

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