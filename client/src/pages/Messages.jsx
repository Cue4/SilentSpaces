import {fetchMessages} from '../utils/api';
import {useState, useEffect} from 'react'
import React from 'react';
import '../index.css'; // Ensure this file contains the styles provided earlier.

const Messages = () => {
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
        <>
        <h2>Messages</h2>
        <p>{messages[0]?._id}</p>
        
        </>
    )
}





export default Messages;