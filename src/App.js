import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Menubar from './containers/Menubar';
import ImportBsJS from './utils/importBsJS';
import Footer from './containers/Footer';
import HomePage from './containers/HomePage';
import Products from './containers/Products';
import Categories from './containers/Categories';
import Brands from './containers/Brands';
import HotDeals from './containers/HotDeals';
import LoginPage from './components/LoginPage';

function App() {
  const location = useLocation();

  // Set background color based on the current route
  const backgroundColor = (() => {
    switch (location.pathname) {
      case '/':
        return '#e5e4e2'; 
      case '/products':
        return '#ffe4e1'; 
      case '/categories':
        return '#ffffff'; 
      case '/brands':
        return '#ffffff'; 
      case '/flash-sale':
        return '#e5e4e2'; 
      default:
        return '#e5e4e2'; 
    }
  })();

  // Check if the current route is the login page
  const isLoginPage = location.pathname === '/login';

  return (
    <>
      <ImportBsJS />
      {!isLoginPage && <Menubar />}
      <div className="main" style={{ backgroundColor }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/flash-sale" element={<HotDeals />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
      {!isLoginPage && <Footer />}
    </>
  );
}

export default App;


