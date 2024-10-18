import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Auth from '../../utils/auth';
// import './index.css';


const Header = () => {
  const [profileId, setProfileId] = useState('')
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  useEffect(() => {
    getCredentials()
  },[])
  
  const getCredentials = () => {
    try {
      const userData = Auth.getProfile();
      if (userData && userData.data && userData.data._id) {
        setProfileId(userData.data._id);
      }
    } catch (error) {

    }
  };

  return (
    <header className="header">
      <div className="div-header">
        <Link className="title" to="/">
          <h1 className="h1">
           Silent Spaces
          </h1>
        </Link>
        <br/>
        <p className="p1">
          Meet your new programming pals.
        </p>
        <div>
          {Auth.loggedIn() ? (
            <>
              <button className="logoutbtn" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
            <div className="access">
              <Link className="loginbtn" to="/login">
                Login
              </Link>
              <Link className="signupbtn" to="/signup">
                Signup
              </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;