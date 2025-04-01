import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { store } from './store';
import { Provider } from 'react-redux';

// Simple error handling until error-boundary is installed
const root = ReactDOM.createRoot(document.getElementById('root')!);

try {
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
} catch (error) {
  console.error('Application failed to render:', error);
  root.render(
    <div className="p-4">
      <h2>Something went wrong</h2>
      <pre className="text-red-500">{error instanceof Error ? error.message : 'Unknown error'}</pre>
    </div>
  );
}
