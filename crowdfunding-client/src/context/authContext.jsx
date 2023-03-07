import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import authService from "../services/authService";
import { clearAccessTokenCookie, setAccessTokenCookie } from "../utils/cookie";

const getNilUser = () => ({
  id: 0,
  fullname: "",
  email: "",
  isNil() {
    return true;
  },
});

const AuthCtx = createContext({
  checking: false,
  user: getNilUser(),
  login: () => Promise.resolve(getNilUser()),
  logout: () => { },
});

async function getCurrentUser() {
  const res = await authService.getCurrentUser();
  const { id, fullname, email } = res;
  return {
    id,
    fullname,
    email,
    isNil() {
      return false;
    },
  };
}

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [checking, setIsChecking] = useState(true);
  const [user, setUser] = useState(getNilUser());

  const login = useCallback(async (email, password) => {
    const res = await authService.login({ email, password });
    setAccessTokenCookie(res.token);
    const user = await getCurrentUser();
    setUser(user);
    return user;
  }, []);

  const register = useCallback(async (payload) => {
    const res = authService.register(payload);
    setAccessTokenCookie(res.token);
    const user = await authService.getCurrentUser();
    setUser(user);
    return user;
  }, []);

  const logout = useCallback(() => {
    clearAccessTokenCookie();
    setUser(getNilUser());
    navigate("/login", { replace: true });
  }, []);

  useEffect(() => {
    setIsChecking(true);

    getCurrentUser()
      .then((user) => {
        setUser(user);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setIsChecking(false));
  }, []);

  return (
    <AuthCtx.Provider value={{ user, checking, login, register, logout }}>
      {children}
    </AuthCtx.Provider>
  );
};

export function useAuth() {
  return useContext(AuthCtx);
}
