import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import * as serviceWorker from './serviceWorker';

import { icons } from './assets/icons';

import './sass/index.sass';
import { Provider } from 'react-redux';
import { store } from './store/store';

Object.defineProperty(React, 'icons', {
  value: icons,
  writable: true,
  enumerable: true,
  configurable: true
});



ReactDOM.render(
  <Provider store={ store() } >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
  ,
  document.getElementById('root')
);

serviceWorker.unregister();
