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