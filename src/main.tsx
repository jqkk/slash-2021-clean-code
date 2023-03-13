import React from 'react';
import ReactDOM from 'react-dom/client';

import { DevTools } from 'jotai-devtools';

import { worker } from '@/mocks/worker';
import GlobalStyles from '@/styles/GlobalStyles';

import App from './App';

if (process.env.NODE_ENV === 'development') {
  worker.start({
    onUnhandledRequest: 'bypass',
  });
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
    <DevTools />
  </React.StrictMode>,
);
