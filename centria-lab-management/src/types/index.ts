import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css'; // This would include all the CSS from responsive-css.css

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// Add any app-wide initialization code here
// For example, handling auth token on page refresh, etc.

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
