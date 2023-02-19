import {
  CampaignPage,
  CampaignListPage,
  CampaignDetailPage,
  DonationPage,
} from "./pages";

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
    path: "/donation/:id",
    element: <DonationPage />,
  },
];
export default homeRoutes;
