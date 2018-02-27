import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import Hello from './components/Hello';

ReactDOM.render(
  <Provider store={ store }>
    <Router>
      <Hello />
    </Router>
  </Provider>,
  document.getElementById('albums-container')
);
