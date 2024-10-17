import { Link } from 'react-router-dom';
import {fetchMessages, fetchDirectMessages, sendMessage, deleteMessage} from '../utils/api';
import {useState, useEffect} from 'react'
import React from 'react';
import '../index.css'; 

const Messages = () => {
    const [messages,setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [senderName, setSenderName] = useState('');
    const [senderId, setSenderId] = useState('670877bafe69de2daba1abd9');
    const [recieverId, setRecieverId] = useState('670a16ac562bcb8a5cc6e956');

    useEffect(() => {
      getMessages()
    }, [])
  
  const getMessages = async () => {
      try {
        const response = await fetchMessages()
        console.log('Fetched Messages:', response);
        setMessages(response);
      } catch (err) {
        console.log(err);
      }
    };

    const handleSendMessage = async (e) => {
      e.preventDefault();
      if (!newMessage || !senderName) return; 
  
      const messageData = {
        senderId,
        recieverId,
        content: newMessage,
      };
  
      try {
        await sendMessage(messageData); 
        setMessages([...messages, messageData]); 
        setNewMessage(''); 
        setSenderName(''); 
      } catch (err) {
        console.log(err);
      }
    };
  
    return (
        <>
        <h2 className="messages-heading">Messages</h2>
      <div className="messages-grid">
        {messages.map((message) => (
          <div key={message._id} className="message-space">
            <div key={message._id} className="message-card">
            <h3>{message.senderName}</h3>
            <p>{message.content}</p>
            <p className="message-timestamp">
              {message.createdAt}
            </p>
          </div>
        </div>
        ))}
      </div>
      <form className="message-form" onSubmit={handleSendMessage}>
        <input
          type="text"
          placeholder="Your Name"
          value={senderName}
          onChange={(e) => setSenderName(e.target.value)}
          className="message-input"
        />
        <textarea
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="message-input"
        />
        <button type="submit" className="send-message-btn">
          Send Message
        </button>
      </form>
        </>
    );
};





export default Messages;