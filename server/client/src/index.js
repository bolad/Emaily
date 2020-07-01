import React from 'react';
import ReactDOM from 'react-dom';
import 'materialize-css/dist/css/materialize.min.css'

import { Provider } from 'react-redux';
import { createStore, ApplyMiddleware, applyMiddleware } from 'redux';
import reducers from './reducers'

import App from './components/App';

const store = createStore(reducers, {}, applyMiddleware())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);