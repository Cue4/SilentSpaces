import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from './App.jsx';
import Home from './pages/Home.jsx';
import Profile from './pages/Profile.jsx';
import Signup from './pages/Signup.jsx';
import Login from './pages/Login.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      }, {
        path: '/login',
        element: <Login />
      }, {
        path: '/signup',
        element: <Signup />
      }, {
        path: '/profiles/:profileId',
        element: <Profile />
      }, {
        path: '/me',
        element: <Profile />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)