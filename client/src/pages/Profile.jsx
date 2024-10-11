import { Navigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import Auth from '../utils/auth';
import ChatComponent from '../components/ChatComponent.jsx'

const Profile = () => {
  const { profileId } = useParams();
  console.log(profileId)

  const [loading, setLoading] = useState('Loading...')
  const [isLoading, setIsLoading] = useState(true)
  // Use React Router's `<Navigate />` component to redirect to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data._id === profileId) {
    return <Navigate to={`/profiles/${profileId}`}/>;
  }

  if (isLoading) {
    return ;
  }

  // if (!profile?.name) {
  //   return (
  //     <h4>
  //       You need to be logged in to see your profile page. Use the navigation
  //       links above to sign up or log in!
  //     </h4>
  //   );
  // }
  return (
    <section>
      <h2 className="card-header">
        {profileId ? `dude` : 'Your'} friends have endorsed these
        skills...
      </h2>
      <div>
        <ChatComponent/>
      </div>
    </section>
  );
};
return (
  <div>
    {isLoading ? (
      <div>Loading...</div>
    ) : (
      <>
        {Auth.loggedIn() && Auth.getProfile().data._id === profileId ? (
          <Navigate to={`/profiles/${profileId}`}/>
        ) : (
          <ProfileContent />
        )}
      </>
    )}
  </div>
);


export default Profile;