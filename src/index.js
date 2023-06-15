import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './containers/Contact';
import Services from './containers/Services';
import About from './containers/About';

const root = ReactDOM.createRoot(document.getElementById('root'));

const WebApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/Contact" element={<Contact />} />
        <Route exact path="/About" element={<About />} />
        <Route exact path="/Services" element={<Services />} />
      </Routes>
    </BrowserRouter>
  );
};

root.render(
  <React.StrictMode>
    <WebApp />
  </React.StrictMode>
);
