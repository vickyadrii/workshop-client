import { LoginPage } from "./pages";

import RegistrationPage from "./pages/RegistrationPage";

const authRoutes = [
  { path: "/login", element: <LoginPage /> },
  {
    path: "/registration",
    element: <RegistrationPage />,
  },
];

export default authRoutes;
