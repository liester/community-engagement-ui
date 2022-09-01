import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Login from './login/Login';
import Signup from "./signup/Signup";
import './index.css'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
      </Routes>
      </BrowserRouter>
  </React.StrictMode>
)
