import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { fetchMessages } from './utils/api';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {


  return (
      <div className="flex-column justify-flex-start min-100-vh">
        <Header />
        <div className="container">
          <Outlet />
        </div>
        <Footer />
      </div>
  );
}

export default App;