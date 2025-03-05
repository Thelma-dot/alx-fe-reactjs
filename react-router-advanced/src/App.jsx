import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Profile from './components/Profile';
import ProfileDetails from './pages/ProfileDetails';
import ProfileSettings from './pages/ProfileSettings';
import ProtectedRoute from './components/ProtectedRoute';
import BlogPost from './pages/BlogPost';


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="profile" element={<ProtectedRoute><Profile /></ProtectedRoute>}>
            <Route path="details" element={<ProfileDetails />} />
            <Route path="settings" element={<ProfileSettings />} />
          </Route>
          <Route path="/blog/:id" element={<BlogPost />} />
        </Route>
      </Routes>
    </Router>
  );
}

