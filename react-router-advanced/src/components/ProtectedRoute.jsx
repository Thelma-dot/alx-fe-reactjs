import { Navigate, Outlet } from 'react-router-dom';

// Simulated authentication function
const isAuthenticated = () => {
  return localStorage.getItem("user") !== null; // Replace with real auth logic
};

export default function ProtectedRoute() {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/login" />;
}
