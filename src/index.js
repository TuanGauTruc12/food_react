import React from 'react';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import './index.css';
import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <App />
  </BrowserRouter>
);
