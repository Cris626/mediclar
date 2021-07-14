import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore } from './redux/store';

ReactDOM.render(
  <Provider store={configureStore()}>
    <Suspense fallback={<h1>___LOADING___</h1>}>
      <App/>
    </Suspense>
  </Provider>,
  document.getElementById('root')
);

