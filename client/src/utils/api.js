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