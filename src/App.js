import React from 'react'
import {BrowserRouter as Router, Routes, Route, useParams} from "react-router-dom";

import Nav from "./Nav";
import Main from "./Main/Main";
import About from "./About/About";
import Store from './Store/Store';
import Footer from "./Footer"
import ProductPage from './productPage/productPage';

import './index.css';


function UrlHandlerForProductID() {
  const{product_id} = useParams();
  return (
      <ProductPage id={product_id}/>
  )
}



function App() {
  
  
  return (
      <>
        <Router>
              <Nav/>
                <Routes>
                  <Route path="/" element={<Main/>}/>
                  <Route path="/About" element={<About/>}/>
                  <Route exact path="/Store" element={<Store/>}/>
                  <Route path="/Store/:product_id" element={<UrlHandlerForProductID/>}/>
                </Routes>
        </Router> 
        <Footer/>
      </>
      
  );
}

export default App;
