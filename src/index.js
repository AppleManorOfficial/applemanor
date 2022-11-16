import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import '../node_modules/react-bootstrap/dist/react-bootstrap';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename="/applemanor">
    <App />
  </BrowserRouter>
);
