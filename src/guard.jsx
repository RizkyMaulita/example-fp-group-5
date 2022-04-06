import { useLocation, Navigate } from "react-router-dom";

export function RequireAuth({ children }) {
  let location = useLocation();
  const checkLogin = () => {
    if (localStorage.getItem('userLogin')) {
      return true
    } else {
      return false
    }
  }

  if (checkLogin() === false) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  } else {
    return children;
  }
}