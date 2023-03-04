import { api } from "../config/api";

const authService = {
  login({ email, password }) {
    return api.post("/login", { email, password });
  },
  register(payload) {
    return api.post("/register", payload);
  },
  getCurrentUser() {
    return api.get("/current");
  },
};

export default authService;
