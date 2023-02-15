import { useRoutes } from "react-router-dom";
import { MobileLayout } from "./layouts";
import { authRoutes } from "./modules/auth";

export default function AppRouter() {
  return useRoutes([
    { path: "/", element: <MobileLayout />, children: [...authRoutes] },
  ]);
}
