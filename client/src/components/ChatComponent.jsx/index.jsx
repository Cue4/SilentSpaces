import React, {useState} from 'react'
import { sendMessage } from '../../utils/api'

const ChatComponent = () => {
    const [message , setMessage] = useState('');
    const [messages, setmessages] = useState([]);


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (message.trim()){
            try {
              await sendMessage(messages, message);
              setmessages([...messages, message]);
              setMessage('')
            } catch (err) {
                console.log('error sending message', err)
                
            }
        }
    }
  return (
    <div className="chat-component">
      <h2>Chat</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button type="submit">Send</button>
      </form>
      <div className="message-list">
        {messages.map((msg, index) => (
          <div key={index} className="message">
            {msg}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ChatComponent