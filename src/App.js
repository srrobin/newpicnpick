import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menubar from './containers/Menubar';
import ImportBsJS from './utils/importBsJS';
import Footer from './containers/Footer';
import HomePage from './containers/HomePage';

function App() {
  return (
    < >
      <ImportBsJS/>
      <Menubar/>
      <div className='main'>
        <HomePage/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
