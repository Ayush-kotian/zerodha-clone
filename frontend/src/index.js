import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HomePage from './landing_page/home/HomePage';
import Singup from './landing_page/signup/Signup';
import AboutPage from './landing_page/about/AboutPage';
import ProductPage from './landing_page/products/ProductPage';
import SupportPage from './landing_page/support/SupportPage';
import PricingPage from './landing_page/pricing/PricingPage';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import Notfound from './landing_page/Notfound';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
    <Navbar/>
<Routes>
 <Route path="/" element={<HomePage/>}/>
 <Route path="/signup" element={<Singup/>}/>
 <Route path="/about" element={<AboutPage/>}/>
 <Route path="/product" element={<ProductPage/>}/>
 <Route path="/pricing" element={<PricingPage/>}/>
 <Route path="/support" element={<SupportPage/>}/>
 <Route path="*" element={<Notfound/>}/>
</Routes>
<Footer/>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

