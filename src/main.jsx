import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './Navbar.css'
import './components/Home.jsx'
import './components/Login.jsx'
import './components/About.css'
import {BrowserRouter} from "react-router-dom"

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
} else {
  console.error('Root element with ID "root" not found in the document.');
}
