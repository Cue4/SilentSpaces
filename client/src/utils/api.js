// import io from 'socket.io-client';

// let socket;

// const connectSocket = () => {
//   if (!socket) {
//     socket = io('http://localhost:3001');
//     socket.on('connect', () => {
//       console.log('Connected to server');
//     });
//   }
// };


export const createUser = (userData) => {
    console.log("api js file in client",userData)
 try {
    return fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
 } catch (err) {
    console.log(err)
    
 }
  };

  export const deleteUser = async (userid)=> {
   try {
    
      const response = await fetch(`/api/users/${userid}`,{
         method: "DELETE",
         credentials: "include",
      })
      if (!response.ok){
         throw new Error("network is not ok")
      }
      const data = await response.json({message:"user deleted"})
   } catch (err) {
      console.log(err)
   }
  }



  // New methods for chatting
export const fetchMessages = async () => {
   try {
    
     const response = await fetch('/api/chat', {
      method: 'GET',
      credentials: 'include',
     });
     const data = await response.json();
     return data;
   } catch (err) {
     console.error('Error fetching messages:', err);
     throw err;
   }
 };


 export const fetchDirectMessages = async ({senderId, receiverId}) => {
  try {
    const response = await fetch(`/api/chat/${senderId}/${receiverId}`, {
      method: 'GET',
      credentials: 'include'
    });
    const data = await response.json();
    return data
  } catch (err) {
    console.log(err)    
  }  
 }
 
 export const sendMessage = async (message) => {
   try {
   
     const response = await fetch('/api/chat', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify({ message }),
     });
     const data = await response.json();
     return data;
   } catch (err) {
     console.error('Error sending message:', err);
     throw err;
   }
 };

