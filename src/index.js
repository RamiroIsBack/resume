import React from 'react';
import { createRoot } from 'react-dom/client';
import { UIProvider } from './context/UIContext';
import './index.css';
import { App } from './components/layout';

const root = createRoot(document.getElementById('root'));
root.render(
  <UIProvider>
    <App />
  </UIProvider>
);
