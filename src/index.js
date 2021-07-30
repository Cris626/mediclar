import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore } from './redux/store';
import Screen from './helpers/screen';

ReactDOM.render(
  <Provider store={configureStore()}>
    <Suspense fallback={<Screen />}>
      <App/>
    </Suspense>
  </Provider>,
  document.getElementById('root')
);

