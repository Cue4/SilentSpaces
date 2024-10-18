import { Navigate, useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Auth from "../utils/auth";
import ChatComponent from "../components/ChatComponent.jsx";

const Profile = () => {
  const { profileId } = useParams();
  const [loading, setLoading] = useState(true); // This manages the loading state
  const [profile, setProfile] = useState(null); // Manage profile data

  useEffect(() => {
    // Simulate a profile fetching function (replace with your real fetching logic)
    const fetchProfile = () => {
      try {
        // Simulate a delay or API call

        const userData = Auth.getProfile(); // Assuming you retrieve profile here
        if (userData && userData.data._id === profileId) {
          setProfile(userData.data); // Set profile data if it matches the profileId
        } else if (userData && userData.data && userData.data._id) {
          setProfile(userData.data); // If `data._id` exists, use that
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
      } finally {
        setLoading(false); // Stop loading after fetching
      }
    };

    fetchProfile();
  }, [profileId]);

  if (!Auth.loggedIn()) {
    return (
      <h4>
        You need to be logged in to see your profile page. Use the navigation
        links above to sign up or log in!
      </h4>
    );
  }

  return (
    <section>
      <h2 className="card-header"></h2>

      <div className="flex h-screen">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-200 p-6 flex flex-col">
          <nav className="flex-grow">
            <h2 to="/" className="flex items-center mb-4">
              <span className="text-xl">🏠 PROFILE</span>
            </h2>
            <Link to="/message" className="flex items-center mb-4">
              <span className="text-xl">💬 Messages</span>
            </Link>
            <Link to="/topics" className="flex items-center mb-4">
              <span className="text-xl">📚 Topics</span>
            </Link>
          </nav>
          <div className="mt-auto">
            <Link to="/help" className="flex items-center mb-4">
              <span className="text-xl">❓ Help & Support</span>
            </Link>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-grow p-8">
          <div className="text-center mt-16">
            <h1 className="text-4xl font-bold mb-4">Welcome to SilentSpaces</h1>
            <p className="text-lg mb-12">
              A platform to connect with others in meaningful ways, whether
              through random connections or group chats.
            </p>

            <div className="mb-8">
              <label className="text-xl mr-4">
                Select a Topic to Chat About
              </label>
              <br />
              <select className="px-3 py-2 border rounded">
                <option>Select</option>
                <option value="tech">Technology</option>
                <option value="health">Health & Wellness</option>
                <option value="finance">Finance</option>
                <option value="music">Music</option>
                <option value="sports">Sports</option>
                <option value="movies">Movies & Entertainment</option>
                <option value="education">Education</option>
                <option value="travel">Travel</option>
                <option value="gaming">Gaming</option>
                <option value="science">Science</option>
              </select>
            </div>
            <br />
            <div className="flex justify-center gap-4">
              <button className="bg-black text-white px-6 py-3 rounded">
                Random Connection
              </button>
              <br/>
              <button className="border border-black px-6 py-3 rounded">
                Group Chat
              </button>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Profile;
