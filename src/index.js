import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter } from  "react-router-dom";
import "./App.css";



ReactDOM.render((
  <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>),
  document.getElementById('root')
);
