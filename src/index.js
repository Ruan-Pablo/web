import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/app.css'

import reportWebVitals from './reportWebVitals';

import Home from './pages/Home';
import Login from './pages/Login'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Login />
);

// jeito antio
// ReactDOM.render(<Home />, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
