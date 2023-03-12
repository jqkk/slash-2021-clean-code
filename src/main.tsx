import React from 'react';
import ReactDOM from 'react-dom/client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Provider } from 'jotai';
import { DevTools } from 'jotai-devtools';
import { queryClientAtom } from 'jotai-tanstack-query';

import { worker } from '@/mocks/worker';
import GlobalStyles from '@/styles/GlobalStyles';

import App from './App';

worker.start({
  onUnhandledRequest: 'bypass',
});

const queryClient = new QueryClient();

queryClientAtom.init = queryClient;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider>
        <GlobalStyles />
        <App />
        <DevTools />
      </Provider>
      <ReactQueryDevtools position='bottom-right' />
    </QueryClientProvider>
  </React.StrictMode>,
);
