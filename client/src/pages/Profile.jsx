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
    return <div>Loading..</div>;
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
      <div>
        {Auth.loggedIn() && Auth.getProfile().data._id === profileId ? (
          <Navigate to={`/profiles/${profileId}`}/>
        ) : (
          <ProfileContent />
        )}
        <div className="flex h-screen">
       {/* Sidebar */}
       <aside className="w-64 bg-gray-200 p-6 flex flex-col">
       <nav className="flex-grow">
           <Link to="/profile" className="flex items-center mb-8">
            <span className="text-xl">👤 Profile</span>
           </Link>
           <Link to="/" className="flex items-center mb-4">
             <span className="text-xl">🏠 Home</span>
          </Link>
//           <Link to="/messages" className="flex items-center mb-4">
//             <span className="text-xl">💬 Messages</span>
//           </Link>
//           <Link to="/topics" className="flex items-center mb-4">
//             <span className="text-xl">📚 Topics</span>
//           </Link>
//         </nav>
//         <div className="mt-auto">
//           <Link to="/help" className="flex items-center mb-4">
//             <span className="text-xl">❓ Help & Support</span>
//           </Link>
//           <Link to="/logout" className="flex items-center">
//             <span className="text-xl">🚪 Log out</span>
//           </Link>
         </div>
       </aside>

//       {/* Main content */}
//       <main className="flex-grow p-8">
//         <header className="flex justify-between items-center mb-8">
//           <h1>Favorites</h1>
//           <div className="text-xl">SilentSpaces</div>
//         </header>

//         <div className="text-center mt-16">
//           <h1 className="text-4xl font-bold mb-4">Welcome to SilentSpaces</h1>
//           <p className="text-lg mb-12">
//             A platform to connect with others in meaningful ways, whether through random connections or group chats.
//           </p>

//           <div className="mb-8">
//             <label className="text-xl mr-4">Select a Topic to Chat About</label>
//             <select className="px-4 py-2 border rounded">
//               <option>Select</option>
//               {/* Add more options as needed */}
//             </select>
//           </div>

//           <div className="flex justify-center gap-4">
//             <button className="bg-black text-white px-6 py-3 rounded">
//               Random Connection
//             </button>
//             <button className="border border-black px-6 py-3 rounded">
//               Group Chat
//             </button>
//           </div>
//         </div>
//       </main>
//     </div>
//   
//
  </div>
    </section>
  );
};

  



export default Profile;