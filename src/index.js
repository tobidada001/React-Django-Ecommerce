import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createContext, useState} from 'react'

const root = ReactDOM.createRoot(document.getElementById('root'));

const cartnum = createContext();
root.render(

  <React.StrictMode>

    <App />
  </React.StrictMode>
);

