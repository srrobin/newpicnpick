import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
import UserOrder from './containers/UserOrder';
import About from './containers/FooterLink/About';
import Faq from './containers/FooterLink/Faq';
import Contact from './containers/FooterLink/Contact';
import Help from './containers/FooterLink/Help';
import RefundPolicy from './containers/FooterLink/RefundPolicy';
import PrivacyPolicy from './containers/FooterLink/PrivacyPolicy';
import Sitemap from './containers/FooterLink/Sitemap';
import TrackOrder from './containers/TrackOrder';
import Cart from './containers/Cart';
import Shipping from './containers/Shipping';
import Checkout from './containers/Checkout';
import OrderDetails from './containers/OrderDetails';

function App() {
  const location = useLocation();

  // Set background color based on the current route
  const backgroundColor = (() => {
    switch (location.pathname) {
      case '/':
        return '#e5e4e2'; 
      case '/products':
        return '#fff'; 
      case '/categories':
        return '#ffffff'; 
      case '/brands':
        return '#ffffff'; 
      case '/flash-sale':
        return '#e5e4e2'; 
      case '/page/about':
        return '#ffffff';
      case '/page/faq':
        return '#ffffff'; 
      case '/page/help':
        return '#ffffff';
      case '/page/refund-policy':
        return '#ffffff'; 
      case '/page/privacy-policy':
        return '#ffffff'; 
      case '/page/sitemap':
        return '#ffffff';
      case '/track-order':
        return '#ffffff'; 
      case '/page/contact':
        return '#ffffff'; 
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
      <div
        className="main"
        style={{
          backgroundColor,
          padding: isLoginPage && backgroundColor === '#e5e4e2' ? '50px 0 30px' : '110px 0 0', // Apply padding only for login page with background #e5e4e2
        }}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/flash-sale" element={<HotDeals />} />
          <Route path="/user/order" element={<UserOrder />} />
          <Route path="/user/order/:id" element={<OrderDetails />} />
          <Route path="/track-order" element={<TrackOrder />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/checkout" element={<Checkout />} />

          <Route path="/page/about" element={<About />} />
          <Route path="/page/faq" element={<Faq />} />
          <Route path="/page/contact" element={<Contact />} />
          <Route path="/page/help" element={<Help />} />
          <Route path="/page/refund-policy" element={<RefundPolicy />} />
          <Route path="/page/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/page/sitemap" element={<Sitemap />} />




          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
      {!isLoginPage && <Footer />}
    </>
  );
}

export default App;




























// import React from 'react';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Route, Routes, useLocation } from 'react-router-dom';
// import Menubar from './containers/Menubar';
// import ImportBsJS from './utils/importBsJS';
// import Footer from './containers/Footer';
// import HomePage from './containers/HomePage';
// import Products from './containers/Products';
// import Categories from './containers/Categories';
// import Brands from './containers/Brands';
// import HotDeals from './containers/HotDeals';
// import LoginPage from './components/LoginPage';

// function App() {
//   const location = useLocation();

//   // Set background color based on the current route
//   const backgroundColor = (() => {
//     switch (location.pathname) {
//       case '/':
//         return '#e5e4e2'; 
//       case '/products':
//         return '#ffe4e1'; 
//       case '/categories':
//         return '#ffffff'; 
//       case '/brands':
//         return '#ffffff'; 
//       case '/flash-sale':
//         return '#e5e4e2'; 
//       default:
//         return '#e5e4e2'; 
//     }
//   })();

//   // Check if the current route is the login page
//   const isLoginPage = location.pathname === '/login';

//   return (
//     <>
//       <ImportBsJS />
//       {!isLoginPage && <Menubar />}
//       <div className="main" style={{ backgroundColor }}>
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/products" element={<Products />} />
//           <Route path="/categories" element={<Categories />} />
//           <Route path="/brands" element={<Brands />} />
//           <Route path="/flash-sale" element={<HotDeals />} />
//           <Route path="/login" element={<LoginPage />} />
//         </Routes>
//       </div>
//       {!isLoginPage && <Footer />}
//     </>
//   );
// }

// export default App;


