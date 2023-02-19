import { CampaignPage, CampaignListPage, CampaignDetailPage } from "./pages";

const homeRoutes = [
  {
    path: "/",
    element: <CampaignPage />,
  },
  {
    path: "/campaign",
    element: <CampaignListPage />,
  },
  {
    path: "campaign/:id",
    element: <CampaignDetailPage />,
  },
];
export default homeRoutes;
