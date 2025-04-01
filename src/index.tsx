import React from 'react';
import ReactDOM from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';
import { store } from './store';
import { Provider } from 'react-redux';
import App from './App';
import logger from './utils/logger';

const errorHandler = (error: Error, info: { componentStack: string }) => {
  logger.error('Error caught by boundary:', { error, info });
};

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <ErrorBoundary 
      fallback={<div>Something went wrong</div>}
      onError={errorHandler}
    >
      <Provider store={store}>
        <App />
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>
);
