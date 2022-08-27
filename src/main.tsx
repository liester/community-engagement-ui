import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
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
          <Route path="/test" element={<main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
          </main>} />
      </Routes>
      </BrowserRouter>
  </React.StrictMode>
)
