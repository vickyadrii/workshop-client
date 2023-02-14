import { useRoutes } from "react-router-dom";
import { MobileLayout } from "./layouts";

export default function AppRouter() {
  return useRoutes([{ path: "/", element: <MobileLayout /> }]);
}
