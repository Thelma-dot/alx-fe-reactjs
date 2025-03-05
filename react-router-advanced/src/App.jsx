import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Profile from './pages/Profile';
import ProfileDetails from './pages/ProfileDetails';
import ProfileSettings from './pages/ProfileSettings';
import BlogPost from './pages/BlogPost';
import ProtectedRoute from './components/ProtectedRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '', element: <Home /> },
      { 
        path: 'profile', 
        element: <ProtectedRoute><Profile /></ProtectedRoute>,
        children: [
          { path: 'details', element: <ProfileDetails /> },
          { path: 'settings', element: <ProfileSettings /> },
        ]
      },
      { path: 'blog/:postId', element: <BlogPost /> } // Dynamic Route
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
