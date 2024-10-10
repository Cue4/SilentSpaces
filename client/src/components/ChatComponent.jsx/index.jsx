import React, {useState} from 'react'
import { sendMessage } from '../../utils/api'

const ChatComponent = () => {
    const [message , setMessage] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (message.trim()){
            try {
              await sendMessage(message);
              setMessage('');
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
      {/* Add a way to display messages here */}
    </div>
  )
}

export default ChatComponent