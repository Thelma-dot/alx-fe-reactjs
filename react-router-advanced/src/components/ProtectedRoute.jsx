import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute() {
  const { user } = useAuth(); // Use authentication context

  return user ? <Outlet /> : <Navigate to="/login" />;
}
