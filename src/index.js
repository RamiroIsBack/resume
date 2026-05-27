import React from 'react';
import { createRoot } from 'react-dom/client';
import store from './stores';
import { Provider } from 'react-redux';
import './index.css';
import { App } from './components/layout';

const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store.configure(null)}>
    <App />
  </Provider>
);
