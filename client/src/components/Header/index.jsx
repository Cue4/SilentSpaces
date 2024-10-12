import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Auth from '../../utils/auth';
import '../Header/header.css'

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
      console.error("Error fetching profile data:", error);
    }
  };
  // const getCredentials = () => {
  //   const userData = Auth.getProfile()
  //   const userId = userData.data._id
  //   setProfileId(userId)
  // }


  return (
    <header className="header">
      <div className="div-header">
        <Link className="title" to="/">
          <h1 className="h1">
           Silent Spaces
          </h1>
        </Link>
        <p className="p1">
          Meet your new programming pals.
        </p>
        <div>
          {Auth.loggedIn() ? (
            <>
               {/* {profileId && (
                <Link to={`/profiles/${profileId}`}>
                <button className="profile" onClick={`/profiles/${profileId}`}>View My Profile</button>
              </Link>
              
              )} */}
              <button className="logoutbtn" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-lg btn-primary m-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;