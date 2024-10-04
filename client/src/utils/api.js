export const createUser = async (data) => {
    console.log('Data From API File', data)
    try {
        const response = await fetch('/api/users', {
            method:'POST', 
            credentials:'include', 
            body: JSON.stringify(data), 
            headers: {
                'Content-Type': 'application/json'
            }
        })


        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          throw new Error('Server returned non-JSON response');
        }
    
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Failed to create user');
        }
    
        const responseData = await response.json();
        return responseData;
      } catch (err) {
        console.error('Signup error:', err);
        throw err;
      }
}