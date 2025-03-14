import { Navigate } from 'react-router-dom';

const isAuthenticated = () => {
  return localStorage.getItem('auth') === 'true'; // Simulating authentication
};

export default function ProtectedRoute({ children }) {
  return isAuthenticated() ? children : <Navigate to="/" />;
}
