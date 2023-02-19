import { CampaignPage, CampaignListPage, CampaignDetailPage, CampaignAddPage } from "./pages";

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
  {
    path: "/add-campaign",
    element: <CampaignAddPage />
  }
];
export default homeRoutes;
