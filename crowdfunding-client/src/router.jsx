import { useRoutes } from "react-router-dom";
import { MobileLayout } from "./layouts";
import { HomePage } from "./modules/pages/home";
import { authRoutes } from "./modules/auth";

export default function AppRouter() {
  return useRoutes([
    { path: "/", element: <MobileLayout />, children: [...authRoutes] },
    { path: "/home", element: <MobileLayout />, children: <HomePage /> },
  ]);
}
