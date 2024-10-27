import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menubar from './containers/Menubar';
import ImportBsJS from './utils/importBsJS';
import Footer from './containers/Footer';
import HomePage from './containers/HomePage';
import { Route, Routes } from 'react-router-dom';
import Products from './containers/Products';
import Categories from './containers/Categories';
import Brands from './containers/Brands';
import HotDeals from './containers/HotDeals';

function App() {
  return (
    < >
      <ImportBsJS/>
      <Menubar/>
      <div className='main'>
      <Routes>
         <Route path="/" element={ <HomePage/>} />
         <Route path="/products" element={ <Products/>} />
         <Route path="/categories" element={ <Categories/>} />
         <Route path="/brands" element={ <Brands/>} />
         <Route path="/hotdeals" element={ <HotDeals/>} />
      </Routes>
       
      </div>
      <Footer/>
    </>
  );
}

export default App;
