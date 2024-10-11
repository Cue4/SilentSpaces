import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Auth from '../../utils/auth';

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
    <header className="bg-info text-dark mb-4 py-3 display-flex align-center">
      <div className="container flex-column justify-space-between-lg justify-center align-center text-center">
        <Link className="text-dark" to="/">
          <h1 className="m-0" style={{ fontSize: '3rem' }}>
           Silent Spaces
          </h1>
        </Link>
        <p className="m-0" style={{ fontSize: '1.75rem', fontWeight: '700' }}>
          Meet your new programming pals.
        </p>
        <div>
          {Auth.loggedIn() ? (
            <>
               {profileId && (
                <Link className="btn btn-lg btn-primary m-2" to={`/profiles/${profileId}`}>
                  View My Profile
                </Link>
              )}
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
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