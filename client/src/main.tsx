import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import BuiltInMode from './built-in/BuiltInMode';
//import store from
// styles
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BuiltInMode />
  </React.StrictMode>,
);
