import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

import Hello from './components/Hello';

ReactDOM.render(
  <Provider store={ store }>
    <Hello />
  </Provider>,
  document.getElementById('albums-container')
);
