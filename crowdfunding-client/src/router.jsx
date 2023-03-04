import { useRoutes } from "react-router-dom";
import { MobileLayout } from "./layouts";
import { authRoutes } from "./modules/auth";
import { homeRoutes } from "./modules/home";
import { donationRoutes } from "./modules/donation";
import { campaignRoutes } from "./modules/campaign";

export default function AppRouter() {
  return useRoutes([
    {
      path: "/",
      element: <MobileLayout />,
      children: [...homeRoutes, ...donationRoutes, ...campaignRoutes],
    },
    ...authRoutes,
  ]);
}
