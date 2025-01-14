import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './custom.scss';
import './index.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Cart from './components/Cart.jsx';

// import Karaoke from './Karaoke.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <Routes>
      <Route path="/pitstop" element={<App />} />
      {/* <Route path="/karaoke" element={<Karaoke />} /> */}
      <Route path="/pitstop/cart" element={<Cart />} />

    </Routes>
  </BrowserRouter>

);
