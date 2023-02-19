import { CampaignPage, CampaignListPage, CampaignPageId, CampaignFormAdd } from "./pages";

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
    element: <CampaignFormAdd />
  }
];
export default homeRoutes;
