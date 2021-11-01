import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import 'macro-css';
import App from './App';
import {useState} from 'react'

console.log(useState)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
