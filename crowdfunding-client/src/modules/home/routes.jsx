import { CampaignPage, CampaignListPage, CampaignPageId } from "./pages";

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
];
export default homeRoutes;
