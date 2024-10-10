import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { fetchMessages } from './utils/api';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  const [messages,setMessages] = useState([]);

  useEffect(() => {
    getMessages()
  }, [])

const getMessages = async () => {
    try {
      const response = await fetchMessages()
      console.log("response from app.jsx", response)
      setMessages(response)
    } catch (err) {
      console.log(err)
    }
  }

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