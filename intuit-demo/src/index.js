import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';
import { Provider } from 'react-redux';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import store from './store';

injectGlobal([`
  *,
  &:before,
  &:after {
    box-sizing: border-box !important;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: #e8f5fb;
    font-family: sans-serif;
    font-size: 16px;
  }
`]);

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'));

registerServiceWorker();
