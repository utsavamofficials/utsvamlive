import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const PrivateRoute = ({ children, roles }) => {
  const { getUser, getRole } = useAuth();
  const location = useLocation();

  // First fetch the currently stored session/user
  const user = getUser();

  // No session/user data -> send to login
  if (!user) {
    return <Navigate to="/signin" replace state={{ from: location }} />;
  }

  // Session exists -> account is considered logged in
  const role = getRole() || user.actorType;

  // Check role authorization
  if (roles && roles.length > 0 && !roles.includes(role)) {
    const fallback =
      role === "SUPER_ADMIN"
        ? "/superadmin/dashboard"
        : role === "EVENT_ORGANIZER"
          ? "/admin/dashboard"
          : role === "COLLECTION_EXECUTIVE"
            ? "/em/dashboard"
            : "/signin";

    return <Navigate to={fallback} replace />;
  }

  return children;
};

export default PrivateRoute;
