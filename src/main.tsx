import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Register from './Register.tsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './Dashboard.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
