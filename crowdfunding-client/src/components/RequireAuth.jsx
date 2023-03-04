import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import { useAuth } from "../context/authContext";

export default function requireAuth(Component) {
  return function RequireAuth(props) {
    const auth = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
      const isUserNil = !auth.checking && auth.user.isNil();
      if (isUserNil) {
        navigate("/login");
      }
    }, [auth.checking, auth.user, navigate]);

    if (auth.checking) {
      return null;
    }

    if (!auth.checking && auth.user.isNil()) {
      return null;
    }

    return <Component />;
  };
}
