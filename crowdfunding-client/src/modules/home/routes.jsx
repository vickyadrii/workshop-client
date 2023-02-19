import { CampaignPage, CampaignListPage, CampaignPageId, CampaignAddPage } from "./pages";

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
    element: <CampaignPageId />,
  },
  {
    path: "/add-campaign",
    element: <CampaignAddPage />
  }
];
export default homeRoutes;
