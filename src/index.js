import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router";
import SSE from './pages/sse';
import SathyaSai100Birthday from './pages/sathyasai100birthday';
import SaiServicePage from './pages/service';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/sse" element={<SSE />} />
      <Route path="/sathya100birthday" element={<SathyaSai100Birthday />} />
      <Route path="/service" element={<SaiServicePage />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
